import React from 'react';

const Select = ({ value, handler, arry }) => {


    return (
        <div className="form-control w-full">
            <label className="label"><span className="label-text">Select a date*</span></label>
            <select value={value} onChange={handler} className="border border-amber-600 rounded-2xl p-2" placeholder='name'>
                {
                    arry.map(v => <option key={Math.random()}>{v}</option>)
                }
            </select>
        </div>
    );
};

export default Select;