import React from 'react';
import { BsArrowRight } from 'react-icons/bs'


const Details = () => {

    const parcelType = ['document', 'parcel', 'glass', 'wood', 'steel', 'other']
    const weight = ['100gm-500gm', '500gm-1kg', '1kg-2kg', '2kg-3kg', '3kg-4kg', '4kg-5kg', '5kg-6kg', '6kg-7kg', '7kg-8kg', '8kg-9kg', '9kg-10kg', '10kg-11kg', '11kg-12kg', '12kg-13kg', '13kg-14kg', '15kg-16kg', '16kg-17kg', '17kg-18kg', '18kg-19kg', '19kg-20kg', '20kg-21kg', '21kg-22kg', '22kg-23kg', '23kg-24kg', '24kg-25kg', '25kg-26kg', '26kg-27kg', '27kg-28kg', '28kg-29kg', '29kg-30kg', '30kg-31kg', '31kg-32kg', '32kg-33kg', '33kg-34kg', '34kg-35kg', '35kg-36kg', '36kg-37kg', '37kg-38kg', '38kg-39kg', '39kg-40kg',]
    
    return (
        <div className='pl-16'>
            <div className='w-[30%]'>
                <h1 className='text-4xl mt-11 pb-2 font-semibold text-sky-900'>Item Details :</h1>
                <hr />
           </div>
            <form className='w-[60%] mt-4  space-y-4'>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">what do you want to send*</span></label>
                    <select className="border border-sky-600 rounded-2xl p-2" placeholder='name'>
                        {
                        parcelType.map(v => <option selected={v=== 'parcel'? true:false} key={Math.random()}>{v}</option>)
                        }
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Item Weight*</span></label>
                    <select className="border border-sky-600 rounded-2xl p-2" placeholder='name'>
                        {
                            weight.map(v => <option key={Math.random()}>{v}</option>)
                         }
                    </select>
                </div>

                <div className='flex gap-3'>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">number of items*</span></label>
                        <input type='number' className="border border-sky-600 rounded-2xl p-2" placeholder='number' />
                    </div>

                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Item Image*</span></label>
                        <input type="file" className="file-input file-input-bordered file-input-info w-full max-w-xs" />

                    </div>
                </div>

                <div className='pt-6'>
                    <button className='bg-sky-500 btn hover:bg-sky-600 w-full' type="submit">Continue <BsArrowRight/> </button>
                </div>
            </form>
        </div>
    );
};

export default Details;