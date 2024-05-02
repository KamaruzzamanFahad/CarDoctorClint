import React from 'react';
import aboutimage from '../../assets/images/about.png'
const AboutUs = () => {
    return (
        <div className='grid grid-cols-2 gap-10 mt-20'>
            <div>
                <img src={aboutimage} alt="" className='w-[90%]' />
            </div>

            <div className='flex flex-col'>
                <p className='text-[#FF3811] text-lg font-bold'>About Us</p>
                <h1 className='font-bold text-black w-[60%] mt-6 text-4xl'>We are qualified & of experience in this field</h1>
                <p className='mt-5 text-[#868686] w-[80%]'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <br />
                <p className='mt-2 text-[#868686] w-[80%]'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className='btnfill mt-10 w-44'>Get More Info</button>
            </div>
        </div>
    );
};

export default AboutUs;