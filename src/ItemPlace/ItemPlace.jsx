import React, { useState } from 'react';
import HeadLine from '../utility/HeadLine';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { Roller } from 'react-spinners-css';
import { useParcelMutation } from '../redux/getDataApi';

const ItemPlace = () => {

    const { data: fetchData, refetch } = useCalculateHooks()
    const [setData, { data: returnData }] = useParcelMutation()
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



    const clickHandler = async (data) => {
        setLoading(true)
        await setData({ id: fetchData._id, obj: { floor: data } })
        await refetch()
        setLoading(false)

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
                        <div onClick={() => { clickHandler(v) }} key={Math.random()} className={`flex justify-between items-center border rounded-lg cursor-pointer hover:bg-slate-200 duration-75 ${fetchData?.floor?.floor === v.floor ? 'bg-[#0AC041]' : 'bg-white'} p-3 mt-3 font-semibold`}>
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
            <button onClick={btnHandler} disabled={fetchData?.floor ? false : true} className='bg-[#0AC041] btn hover:bg-[#46ca58] w-[45%]'>Review <BsArrowRight /></button>
        </div>
    </section>
);
};

export default ItemPlace;