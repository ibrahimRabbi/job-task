import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Navigate } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im'
import { useDistrictDataQuery, useLocationMutation } from '../redux/getDataApi';



const Location = () => {

    const [desabled, setdesabled] = useState(true)
    const { data: distric = [] } = useDistrictDataQuery()
    const [setData, { data }] = useLocationMutation()


    const changeHandler = (e) => {
        if (e.target.value) {
            setdesabled(false)
        }
    }

    const locationHandler = (e) => {
        e.preventDefault()
        const districtName = e.target.destination.value;
        const find = distric.find(v => v.district === districtName)
        const obj = {
            districtName,
            distance: find.distance_from_dhaka,
        }
        setData(obj)
    }


    if (distric.length < 1) {
        return <div className='h-[90vh]'><h1 className='text-2xl'>data is Loading</h1></div>
    }

    if (data?.insertedId) {
        localStorage.setItem('id', data.insertedId)
        return <Navigate to='/step' />
    }


    return (
        <section id='location'>
            <div>
                <form onSubmit={locationHandler} className='left-80 lg:absolute -bottom-44 lg:w-[50%] mx-auto w-[90%]'>

                    <div className='mt-4 flex justify-between border items-center bg-white border-green-500 rounded-md shadow-xl px-2'>
                        <div className=' p-7 flex items-center gap-2 w-full pl-2 font-semibold text-gray-700'>
                            <ImLocation2 />
                            <p name='from'>
                                From : Dhaka
                            </p>
                        </div>

                        <select defaultValue={'DEFAULT'} onChange={changeHandler} name='destination' className='w-full mr-2 bg-transparent outline-none p-3' required>
                            <option value="DEFAULT" disabled >Selecet District</option>
                            {
                                distric.map(v => <option key={v._id}>{v.district}</option>)
                            }
                        </select>
                    </div>
                    <button disabled={desabled} type='submit' className='bg-[#0AC041] btn mt-7 text-center mx-auto flex items-center gap-1 text-zinc-900 px-10  py-2 rounded-lg hover:bg-[#0BA636]'>Calculate  price <BsArrowRight /></button>
                </form>
            </div>
        </section>
    );
};

export default Location;










// import { io } from "socket.io-client";
// const socket = io("https://task-server-seven.vercel.app");
// socket.on('msg', (data) => {
//     console.log(data)
// }) 