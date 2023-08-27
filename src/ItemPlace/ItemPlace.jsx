import React, { useState } from 'react';
import HeadLine from '../utility/HeadLine';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Roller } from 'react-spinners-css';

const ItemPlace = () => {

    const { data, refetch } = useCalculateHooks()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const heightDetails = [
        {
            floor: 'ground Floor',
            price: 0
        },
        {
            floor: '1st Floor',
            price: 2
        },
        {
            floor: '2nd Floor',
            price: 2
        },
        {
            floor: '3rd Floor',
            price: 2
        },
        {
            floor: '4th Floor',
            price: 2
        },
        {
            floor: '5th Floor',
            price: 2
        },
        {
            floor: 'Above of 5th Floor',
            price: 5
        },
    ]
    const fatchingHandler = (obj) => {
        return fetch(`https://task-server-seven.vercel.app/location/${data._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
    }


    const clickHandler = (data) => {
        setLoading(true)
        fatchingHandler({ floor: data })
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
        navigate('/review')
    }

    return (
        <section className=' ml-9'>
            <HeadLine title='where are the item' />
            <div className='mt-7 w-[70%]'>
                {
                    heightDetails.map(v => {
                        return (
                            <div onClick={() => { clickHandler(v) }} key={Math.random()} className={`flex justify-between items-center border rounded-lg cursor-pointer hover:bg-slate-200 duration-75 ${data?.floor?.floor === v.floor ? 'bg-amber-400' : 'bg-white'} p-3 mt-3 font-semibold`}>
                                <div className='flex gap-2 items-center'>
                                    <p>{v.floor}</p>
                                </div>
                                <p>{v.price}-Tk</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className='text-center mt-7 w-[70%]'>
                <button onClick={btnHandler} disabled={data?.floor ? false : true} className='bg-amber-500 btn hover:bg-amber-600 w-[45%]'>Review <BsArrowRight /></button>
            </div>
        </section>
    );
};

export default ItemPlace;