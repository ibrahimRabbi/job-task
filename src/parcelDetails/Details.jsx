import React, { useState } from 'react';
import { BsArrowRight } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom';
import useCalculateHooks from '../coustomHooks/CalculateHooks';
import HeadLine from '../utility/HeadLine';
import Select from '../utility/Select';
 import {useForm} from 'react-hook-form'
import { Roller } from 'react-spinners-css';


const Details = () => {

    const parcelType = ['parcel', 'glass', 'wood', 'steel', 'other']
    const weight = ['1kg-2kg', '2kg-3kg', '3kg-4kg', '4kg-5kg', '5kg-6kg', '6kg-7kg', '7kg-8kg', '8kg-9kg', '9kg-10kg', '10kg-11kg', '11kg-12kg', '12kg-13kg', '13kg-14kg', '15kg-16kg', '16kg-17kg', '17kg-18kg', '18kg-19kg', '19kg-20kg', '20kg-21kg', '21kg-22kg', '22kg-23kg', '23kg-24kg', '24kg-25kg', '25kg-26kg', '26kg-27kg', '27kg-28kg', '28kg-29kg', '29kg-30kg', '30kg-31kg', '31kg-32kg', '32kg-33kg', '33kg-34kg', '34kg-35kg', '35kg-36kg', '36kg-37kg', '37kg-38kg', '38kg-39kg', '39kg-40kg',]

   
    const [item, setItem] = useState('')
    const [weigh, setWeight] = useState(1)
    const [quantity,setQunty] = useState('')
    const { refetch,data } = useCalculateHooks()
    const navigate = useNavigate()
    const {register, handleSubmit,formState:{errors}} = useForm()
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(false)

   
    const fatchingHandler = (obj) => {
      return  fetch(`http://localhost:5000/location/${data._id}`, {
            method: 'PATCH',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
           
    }

    const itemHandler = (e) => {
        setItem(e.target.value)
        fatchingHandler({ itemType: e.target.value })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    const weightHandler = (e) => {
        setWeight(e.target.value)
        const value = e.target.value
        const split = value.split('-')
        fatchingHandler({ weight: parseInt(split[0]) })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    refetch()
                }
            })
    }

    const quantityHandler = (e) => {
        setQunty(e.target.value) 
        const data = parseInt(e.target.value)
        if (data === 0) {
            setError('please add a number of item minimum 1')
        } else if (data >= 6) {
            setError('we are allow only 5 pakage number of item per person')
        } else if (e.target.value === '') {
            setError('number of item is required')
        } else {
            setError('')
            fatchingHandler({ quantity: e.target.value })
                .then(res => res.json())
                .then(res => {
                    if (res.modifiedCount > 0) {
                        refetch()
                    }
                })
        }
       
    }
    

    const submitHandler = (data) => {  
        setLoading(true)
         const { image } = data
         const formData = new FormData()
         formData.append('image', image[0])   
          
        fetch(`https://api.imgbb.com/1/upload?key=980c5aa9b32d7a954c2c27ea3bb7f131`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(res => {
                const img = res.data.url
                    fatchingHandler({ image: img })
                        .then(res => res.json())
                        .then(res => {
                            if (res.modifiedCount > 0) {
                                setLoading(false)
                                navigate('date')
                            }
                        })
               
           })
               
    }   
   
    if (loading) {
        return <Roller className='mx-auto mt-48 block'/>
    }
     

    return (
        <div className='pl-36'>
            <HeadLine title='Item Details 2' />
            <form onSubmit={handleSubmit(submitHandler)} className='w-[60%] mt-4  space-y-4'>
                <Select value={item} handler={itemHandler} arry={parcelType} />
                <Select value={weigh} handler={weightHandler} arry={weight} />
                <div className='flex gap-3'>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">number of items*</span></label>
                        <input value={quantity} onChange={quantityHandler} type='number' className="border border-sky-600 rounded-2xl p-2" placeholder='number' />
                        <p className='text-red-600'>{error}</p>
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Item Image*</span></label>
                        <input {...register('image', { required: true })} name='image' type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        {errors.img && <p className='text-red-600'>image is required</p>}
                    </div>
                </div>

                <div className='pt-6'>
                    <button className='bg-sky-500 btn hover:bg-sky-600 w-full' type="submit">Continue <BsArrowRight /> </button>
                </div>
            </form>
        </div>
    );
};

export default Details;

// {...register('quantity', { required: true, min: 1, max: 5 }) }
// { errors.quantity?.type === 'required' && <p className="text-red-600">number of if is requird</p> }
// { errors.quantity?.type === 'min' && <p className="text-red-600">please add a number of item minimum 1</p> }
// { errors.quantity?.type === 'max' && <p className='text-red-600'>we Allow maximum 5 item per person</p> }