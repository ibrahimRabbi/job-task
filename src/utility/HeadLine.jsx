import React from 'react';

const HeadLine = ({title}) => {
    return (
        <div className='lg:w-[40%]  mb-2'>
            <h1 className='text-2xl text-green-900 font-semibold'>{title} :</h1>
            <hr />
        </div>
    )
};

export default HeadLine;