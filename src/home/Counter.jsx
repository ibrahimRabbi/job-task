import CountUp from 'react-countup';

import React from 'react';

const Counter = () => {
    return (
        <section className='lg:w-[80%] w-[95%] mx-auto mt-16 lg:mt-0 mb-20'>
            <div className='lg:flex space-y-12 lg:space-y-0 justify-between items-center text-zinc-700 font-semibold text-md'>
                <div className='text-center'>
                    <h1 className='text-5xl font-semibold text-[#0A9430]'>10 million+</h1>
                    <span>Parcel Has Been Delivary Done</span>
                </div>

                <div className='text-center'>
                    <CountUp className='text-5xl font-semibold text-[#0A9430]' end={64} start={10} enableScrollSpy />
                    <p>District Coverage</p>
                </div>

                <div className='text-center'>
                    <CountUp className='text-5xl font-semibold text-[#0A9430]' enableScrollSpy end={1136} />
                    <p>Delivery Agent</p>
                </div>

                <div className='text-center'>
                    <CountUp className='text-5xl font-semibold text-[#0A9430]' enableScrollSpy end={35000} />
                    <p>Registered Merchants</p>
                </div>
            </div>
        </section>
    );
};

export default Counter;