import React, { useContext } from 'react';
import './home.css'
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { BsTelephone } from 'react-icons/bs'
import { Context } from '../Authentication/AuthContext';


const Navber = () => {

    const { user, signout } = useContext(Context)
 
    return (   
        <div className="navbar navbarr">
            <div className='w-[90%] mx-auto flex justify-between'>

                <div className="">
                    <Link to='/' className=" font-semibold text-2xl text-sky-700">My Curier</Link>
                </div>



                <div className=" flex items-center gap-4 text-sky-700">
                    <Link className='text-lg font-semibold flex items-center gap-1'><BsTelephone /> +880196711517</Link>

                    <div className="dropdown dropdown-end">
                        {
                            user ? <>
                                <div className='tooltip tooltip-bottom tooltip-warning z-10' data-tip={user?.displayName}>
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </label>
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 space-y-2 shadow-xl menu menu-sm dropdown-content bg-slate-100 rounded-box w-52">
                                    <li><Link className='bg-sky-500 text-gray-700'>DashBoard</Link></li>
                                    <li><button onClick={()=>signout()} className='bg-sky-500 text-gray-700'>Logout</button></li>
                                </ul>
                            </> : <Link to='/signin' className='bg-sky-500 p-2 rounded-lg   font-semibold text-slate-700'>Sign In</Link>
                       }
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;