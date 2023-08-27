import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { Roller } from 'react-spinners-css';
import { ImLocation2 } from 'react-icons/im'
import './image.css'



const Location = () => {

    const [distric, setDistric] = useState([])
    const navigate = useNavigate()
    const { data } = useCalculateHooks()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const locationHandler = (e) => {
        e.preventDefault()

        const districtName = e.target.destination.value
        if (districtName === 'Selecet District') {
            setError('please selecet your District')
        } else {
            setError('')
            const find = distric.find(v => v.district === districtName)
            const obj = {
                districtName,
                distance: find.distance_from_dhaka,
            }
            fetch('https://task-server-seven.vercel.app/location', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(obj)
            })
                .then(res => res.json())
                .then(res => {
                    if (res.insertedId) {
                        localStorage.setItem('id', res.insertedId)
                        navigate('/step')
                    }
                })
        }

    }

    useEffect(() => {
        fetch('https://task-server-seven.vercel.app/distric')
            .then(res => res.json())
            .then(res => {
                setDistric(res)
                setLoading(false)
            })
    }, [])


    return (
        <section>
            {
                loading ? <div className='h-[90vh]'><Roller className='mx-auto block mt-48' /></div> : <div className='background'>
                    <form onSubmit={locationHandler} className='mx-auto pt-24 w-[50%]'>


                        <div className='mt-4 flex justify-between border items-center bg-slate-50 border-sky-500 rounded-md'>
                            <div className=' p-3 flex items-center gap-2 w-full pl-2 font-semibold text-gray-500'>
                                <ImLocation2 />
                                <p name='from'>
                                    From : Dhaka
                                </p>
                            </div>

                            <select name='destination' className='w-full mr-2 bg-none outline-none p-3' required>
                                <option selected disabled >Selecet District</option>
                                {
                                    distric.map(v => <option key={v._id}>{v.district}</option>)
                                }
                            </select>
                        </div>
                        <p className='text-amber-300 font-semibold text-lg'>{error}</p>
                        <button type='submit' className='mx-auto w-[35%] flex bg-amber-500 text-slate-700 hover:bg-amber-500 btn border-none mt-8'>Calculate  price <BsArrowRight /></button>
                    </form>
                </div>
            }
        </section>
    );
};

export default Location;