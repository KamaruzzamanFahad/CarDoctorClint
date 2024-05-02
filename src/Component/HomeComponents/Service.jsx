import React from 'react';
 import servisone from '../../assets/images/services/1.jpg'
const Service = () => {
    return (
        <div className='mt-20'>
            <div className='text-center mb-12'>
                <p className='text-[#FF3811] text-lg font-bold'>Service</p>
                <h1 className='font-bold text-black mt-6 text-4xl'>Our Service Area</h1>
                <p className='mt-5 text-[#868686] px-[20%]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                <div className='p-5 border-[1px] rounded-lg border-[#00000010]'>
                    <img src={servisone} alt="" className='rounded-lg'/>
                    <h2 className='text-2xl font-semibold mt-2'>Electrical System</h2>
                    <p className='text-red-500 font-semibold'>Price : <span>$20.00</span></p>
                </div>
            </div>
        </div>
    );
};

export default Service;