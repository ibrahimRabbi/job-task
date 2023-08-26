import React, { useEffect, useRef, useState } from 'react';
import HeadLine from '../utility/HeadLine';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Roller } from 'react-spinners-css';

const PickupDate = () => {
    const { data, refetch } = useCalculateHooks()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const ref = useRef(null)
    const next10Days = [];
    const today = new Date()

    for (let i = 0; i <= 10; i++) {
        const nextDay = new Date(today)
        nextDay.setDate(today.getDate() + i);
        next10Days.push(nextDay.toUTCString().slice(0, 10));
    }

    const arry = [
        {
            dayDate: 'today',
            price: 25,
            date: next10Days[0]
        },
        {
            dayDate: 'tommorw',
            price: 20,
            date: next10Days[1]
        },
        {
            dayDate: '',
            price: 15,
            date: next10Days[2]
        },
        {
            dayDate: '',
            price: 10,
            date: next10Days[3]
        },
        {
            dayDate: '',
            price: 5,
            date: next10Days[4]
        },
        {
            dayDate: '',
            price: 0,
            date: next10Days[5]
        },
        {
            dayDate: '',
            price: 0,
            date: next10Days[6]
        },
        {
            dayDate: '',
            price: 0,
            date: next10Days[7]
        },

    ]

    const fatchingHandler = (obj) => {
        return fetch(`http://localhost:5000/location/${data._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })

    }


    const clickHandler = (data) => {
        setLoading(true)
        fatchingHandler({ date: data })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    refetch()
                    setLoading(false)
                }
            })
    }


    if (loading) {
        return <Roller className='mx-auto block mt-48' />
    }

    const btnHandler = () => {
        navigate('/step/place')
    }
 
    return (
        <section className='mt-2  mb-11 ml-9'>
            <HeadLine title='when we pickup and delivery 3' />
            <div className='mt-8 w-[70%]'>
                {
                    arry.map(v => {
                        return (
                            <div onClick={() => clickHandler(v)} key={Math.random()} className={`flex justify-between items-center border rounded-lg cursor-pointer ${data?.date?.date === v.date ? 'bg-amber-400' : 'bg-white'} hover:bg-slate-200 duration-75 p-3 mt-3 font-semibold`}>
                                <div className='flex gap-2 items-center'>

                                    <p>{v.dayDate} {v.date}</p>
                                </div>
                                <p>{v.price}-Tk</p>

                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center mt-7 w-[70%]'>
                <button disabled={data?.date?false:true} onClick={btnHandler}  className='bg-amber-500 btn hover:bg-amber-600 w-[45%]'>Continue <BsArrowRight /></button>
            </div>
        </section>
    );
};

export default PickupDate;