import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { Roller } from 'react-spinners-css';
import { ImLocation2 } from 'react-icons/im'



const Location = () => {

    const [distric, setDistric] = useState([])
    const navigate = useNavigate()
    const { data } = useCalculateHooks()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
const [desabled,setdesabled] = useState(true)

    
    
    
    const changeHandler = (e) => {
        if (e.target.value) {
            setdesabled(false)
        }
    }
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
            fetch('http://localhost:3000/location', {
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
        fetch('http://localhost:3000/distric')
            .then(res => res.json())
            .then(res => {
                setDistric(res)
                setLoading(false)
            })
    }, [])


    return (
        <section id='location'>
            {
                loading ? <div className='h-[90vh]'><Roller className='mx-auto block mt-48' /></div> :
                    <div>
                    <form onSubmit={locationHandler} className=' left-80 absolute -bottom-44 w-[50%]'>


                        <div className='mt-4 flex justify-between border items-center bg-white border-green-500 rounded-md shadow-xl px-2'>
                            <div className=' p-7 flex items-center gap-2 w-full pl-2 font-semibold text-gray-700'>
                                <ImLocation2 />
                                <p name='from'>
                                    From : Dhaka
                                </p>
                            </div>

                            <select onChange={changeHandler} name='destination' className='w-full mr-2 bg-transparent outline-none p-3' required>
                                <option selected disabled >Selecet District</option>
                                {
                                    distric.map(v => <option key={v._id}>{v.district}</option>)
                                }
                            </select>
                        </div>
                        <p className='text-red-600 font-semibold text-lg'>{error}</p>
                            <button disabled={desabled} type='submit' className='bg-[#0AC041] btn mt-7 text-center mx-auto flex items-center gap-1 text-zinc-900 px-10  py-2 rounded-lg hover:bg-[#0BA636]'>Calculate  price <BsArrowRight /></button>
                    </form>
                </div>
            }
        </section>
    );
};

export default Location;










// import { io } from "socket.io-client";
// const socket = io("http://localhost:3000");
// socket.on('msg', (data) => {
//     console.log(data)
// }) 