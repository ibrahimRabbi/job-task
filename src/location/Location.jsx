import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { Roller } from 'react-spinners-css';
import { ImLocation2 } from 'react-icons/im'
 import './image.css'



const Location = () => {
 
    const [distric,setDistric] = useState([])
    const navigate = useNavigate()
    const {data} = useCalculateHooks()
    const [loading, setLoading] = useState(true)
    
    const locationHandler = (e) => {
        e.preventDefault()
        const districtName = e.target.destination.value
        const find = distric.find(v => v.district === districtName)
        const obj = {
            districtName,
            distance: find.distance_from_dhaka,
        }
        fetch('http://localhost:5000/location', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    localStorage.setItem('id',res.insertedId)
                    navigate('/step')
                }
            })
        
    }

    useEffect(() => {
        fetch('http://localhost:5000/distric')
            .then(res => res.json())
            .then(res => {
                setDistric(res)
                setLoading(false)
        })
    },[])
 
    
    return (
        <section>
            {
                loading ? <Roller className='mx-auto block mt-48' /> : <div className='background'>
                    <form onSubmit={locationHandler} className='mx-auto pt-24 w-[50%]'>


                        <div className='mt-4 flex justify-between border items-center bg-slate-50 border-sky-500 rounded-md'>
                            <div className=' p-3 flex items-center gap-2 w-full pl-2 font-semibold text-gray-500'>
                                <ImLocation2 />
                                <p name='from'>
                                    From : Dhaka
                                </p>
                            </div>


                            <select name='destination' className='w-full mr-2 bg-none border-l-2 border-slate-700 outline-none p-3' required>
                                <option selected disabled >Selecet District</option>
                                {
                                    distric.map(v => <option key={v._id}>{v.district}</option>)
                                }
                            </select>

                        </div>
                        <button type='submit' className='mx-auto w-[35%] flex bg-sky-500 text-slate-50 hover:bg-sky-600 btn border-none mt-8'>Calculate  price <BsArrowRight /></button>
                    </form>
                </div>
            }
        </section>
    );
};

export default Location;