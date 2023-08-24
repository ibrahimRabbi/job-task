import React, { useEffect, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';
import useCalculateHooks from '../coustomHooks/CalculateHooks';

const Location = () => {
 
    const [distric,setDistric] = useState([])
    const navigate = useNavigate()
    const {data} = useCalculateHooks()

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
        .then(res=>setDistric(res))
    },[])
 
    
    return (
        <form onSubmit={locationHandler} className='mx-auto mt-11 w-[50%]'>
           
             
            <div className='mt-4 flex justify-between border border-sky-500 rounded-md'>
                <p name='from' className='appearance-none w-full p-3 font-semibold text-gray-500'>
                 From : Dhaka
                </p>
                
                <div className="divider lg:divider-horizontal"></div> 

                <select name='destination' className='w-full mr-2' required>
                    {
                        distric.map(v => <option key={v._id}>{v.district}</option>)
                    }
                </select>
                
            </div>
            <button type='submit' className='bg-sky-500 hover:bg-sky-600 btn border-none mt-8'>Calculate price <BsArrowRight/></button>
        </form>
    );
};

export default Location;