import React from 'react';

const HeadLine = ({title}) => {
    return (
        <div className='w-[40%]  mb-2'>
            <h1 className='text-2xl text-sky-900 font-semibold'>{title} :</h1>
            <hr />
        </div>
    )
};

export default HeadLine;