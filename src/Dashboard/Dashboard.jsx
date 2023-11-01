import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Authentication/AuthContext';

const Dashboard = () => {

    const [summeryData, setSummeryData] = useState([])
    const { user } = useContext(Context)

    useEffect(() => {
        fetch(`http://localhost:3000/summery?email=${user?.email}`)
            .then(res => res.json())
            .then(res => setSummeryData(res))
    }, [])

    console.log(summeryData)
    return (
        <section className='w-[90%] mx-auto mt-11'>
            <h1 className='font-semibold text-xl mb-2'>Pick Up & Payment History:</h1>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className='bg-sky-500'>
                        <tr className='text-sm'>
                            <th>S.N</th>
                            <th>Payment</th>
                            <th>Transection ID</th>
                            <th>District Name</th>
                            <th>payment date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            summeryData.map((v, index) => {
                                return (
                                    <tr key={v._id}>
                                        <th>{index + 1}</th>
                                        <td>{v.amount}-Tk</td>
                                        <td>{v.transictionId}</td>
                                        <td>{v.district}</td>
                                        <td>{v.date}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Dashboard;