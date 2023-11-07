import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../Authentication/AuthContext';
import { useDeshboardQuery } from '../redux/getDataApi';

const Dashboard = () => {
    const { user } = useContext(Context)
    const {data=[]} = useDeshboardQuery(user?.email)

     

   
    return (
        <section className='w-[90%] mx-auto pt-11 pb-96'>
            <h1 className='font-semibold text-xl mb-2'>Pick Up & Payment History:</h1>
            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead className='bg-green-500'>
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
                            data.map((v, index) => {
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