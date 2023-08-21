import React from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom';

const Location = () => {

    const destrict = [
        { "district": "Dhaka", "distance_from_dhaka": 0 },
        { "district": "Faridpur", "distance_from_dhaka": 142 },
        { "district": "Gazipur", "distance_from_dhaka": 31 },
        { "district": "Gopalganj", "distance_from_dhaka": 145 },
        { "district": "Kishoreganj", "distance_from_dhaka": 138 },
        { "district": "Madaripur", "distance_from_dhaka": 103 },
        { "district": "Manikganj", "distance_from_dhaka": 40 },
        { "district": "Munshiganj", "distance_from_dhaka": 32 },
        { "district": "Narayanganj", "distance_from_dhaka": 16 },
        { "district": "Rajbari", "distance_from_dhaka": 108 },
        { "district": "Shariatpur", "distance_from_dhaka": 57 },
        { "district": "Tangail", "distance_from_dhaka": 97 },
        { "district": "Barguna", "distance_from_dhaka": 398 },
        { "district": "Barishal", "distance_from_dhaka": 142 },
        { "district": "Bhola", "distance_from_dhaka": 116 },
        { "district": "Jhalokathi", "distance_from_dhaka": 194 },
        { "district": "Patuakhali", "distance_from_dhaka": 196 },
        { "district": "Pirojpur", "distance_from_dhaka": 173 },
        { "district": "Bandarban", "distance_from_dhaka": 319 },
        { "district": "Brahmanbaria", "distance_from_dhaka": 91 },
        { "district": "Chandpur", "distance_from_dhaka": 84 },
        { "district": "Chittagong", "distance_from_dhaka": 264 },
        { "district": "Comilla", "distance_from_dhaka": 97 },
        { "district": "Cox's Bazar", "distance_from_dhaka": 391 },
        { "district": "Feni", "distance_from_dhaka": 148 },
        { "district": "Khagrachari", "distance_from_dhaka": 269 },
        { "district": "Lakshmipur", "distance_from_dhaka": 104 },
        { "district": "Noakhali", "distance_from_dhaka": 152 },
        { "district": "Rangamati", "distance_from_dhaka": 324 },
        { "district": "Habiganj", "distance_from_dhaka": 195 },
        { "district": "Maulvibazar", "distance_from_dhaka": 243 },
        { "district": "Sunamganj", "distance_from_dhaka": 204 },
        { "district": "Sylhet", "distance_from_dhaka": 256 },
        { "district": "Bagerhat", "distance_from_dhaka": 178 },
        { "district": "Chuadanga", "distance_from_dhaka": 219 },
        { "district": "Jessore", "distance_from_dhaka": 166 },
        { "district": "Jhenaidah", "distance_from_dhaka": 194 },
        { "district": "Khulna", "distance_from_dhaka": 168 },
        { "district": "Kushtia", "distance_from_dhaka": 197 },
        { "district": "Magura", "distance_from_dhaka": 176 },
        { "district": "Meherpur", "distance_from_dhaka": 247 },
        { "district": "Narail", "distance_from_dhaka": 188 },
        { "district": "Satkhira", "distance_from_dhaka": 171 },
        { "district": "Jamalpur", "distance_from_dhaka": 195 },
        { "district": "Mymensingh", "distance_from_dhaka": 120 },
        { "district": "Netrokona", "distance_from_dhaka": 197 },
        { "district": "Sherpur", "distance_from_dhaka": 192 },
        { "district": "Bogra", "distance_from_dhaka": 191 },
        { "district": "Joypurhat", "distance_from_dhaka": 266 },
        { "district": "Naogaon", "distance_from_dhaka": 250 },
        { "district": "Natore", "distance_from_dhaka": 226 },
        { "district": "Chapainawabganj", "distance_from_dhaka": 296 },
        { "district": "Pabna", "distance_from_dhaka": 199 },
        { "district": "Rajshahi", "distance_from_dhaka": 245 },
        { "district": "Sirajganj", "distance_from_dhaka": 127 },
        { "district": "Dinajpur", "distance_from_dhaka": 369 },
        { "district": "Gaibandha", "distance_from_dhaka": 306 },
        { "district": "Kurigram", "distance_from_dhaka": 317 },
        { "district": "Lalmonirhat", "distance_from_dhaka": 354 },
        { "district": "Nilphamari", "distance_from_dhaka": 350 },
        { "district": "Panchagarh", "distance_from_dhaka": 456 },
        { "district": "Rangpur", "distance_from_dhaka": 335 },
        { "district": "Thakurgaon", "distance_from_dhaka": 415 }
    ]

    const navigate = useNavigate()

    const locationHandler = (e) => {
        e.preventDefault()
        const districtName = e.target.destination.value
        const find = destrict.find(v => v.district === districtName)
        const obj = {
            districtName,
            distance: find.distance_from_dhaka
        }
        navigate('/step',{state:obj})
    }
 
    return (
        <form onSubmit={locationHandler} className='mx-auto mt-11 w-[50%]'>
           
             
            <div className='mt-4 flex justify-between border border-sky-500 rounded-md'>
                <p name='from' className='appearance-none w-full p-3 font-semibold text-gray-500'>
                 From : Dhaka
                </p>
                
                <div className="divider lg:divider-horizontal"></div> 

                <select name='destination' className='w-full mr-2' required>
                    <option selected disabled>TO</option>
                    {
                        destrict.map(v => <option key={Math.random()}>{v.district}</option>)
                    }
                </select>
                
            </div>
            <button type='submit' className='bg-sky-500 hover:bg-sky-600 btn border-none mt-8'>Calculate price <BsArrowRight/></button>
        </form>
    );
};

export default Location;