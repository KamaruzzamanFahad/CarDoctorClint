import React from 'react';
import banner1 from '../../assets/images/banner/5.jpg'
import banner2 from '../../assets/images/banner/1.jpg'
import banner3 from '../../assets/images/banner/2.jpg'
import banner4 from '../../assets/images/banner/3.jpg'
import banner5 from '../../assets/images/banner/4.jpg'
const Banner = () => {

    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full h-[70vh]">
                <img src={banner1} className="w-full  rounded-xl" />
                <div className='absolute w-full h-full rounded-xl flex flex-col justify-center pl-28 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                    <h1 className='text-white font-bold'>Affordable <br />Price For Car <br />Servicing</h1>
                    <p className='mt-7'>There are many variations of passages of  available, but <br />the majority have suffered <br />alteration in some form</p>
                    <div>
                        <button className='btnfill mr-4'>Discover More</button>
                        <button className='btnt border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
                    <a href="#slide4" className="btn btn-circle bg-[#ffffff51] border-none text-white text-lg font-light">←</a>
                    <a href="#slide2" className="btn btn-circle bg-[#FF3811] border-none text-white text-lg font-light">→</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full h-[70vh]">
                <img src={banner2} className="w-full  rounded-xl" />
                <div className='absolute w-full h-full rounded-xl flex flex-col justify-center pl-28 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                    <h1 className='text-white font-bold'>Affordable <br />Price For Car <br />Servicing</h1>
                    <p className='mt-7'>There are many variations of passages of  available, but <br />the majority have suffered <br />alteration in some form</p>
                    <div>
                        <button className='btnfill mr-4'>Discover More</button>
                        <button className='btnt border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
                    <a href="#slide1" className="btn btn-circle bg-[#ffffff51] border-none text-white text-lg font-light">←</a>
                    <a href="#slide3" className="btn btn-circle bg-[#FF3811] border-none text-white text-lg font-light">→</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full h-[70vh]">
                <img src={banner3} className="w-full  rounded-xl" />
                <div className='absolute w-full h-full rounded-xl flex flex-col justify-center pl-28 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                    <h1 className='text-white font-bold'>Affordable <br />Price For Car <br />Servicing</h1>
                    <p className='mt-7'>There are many variations of passages of  available, but <br />the majority have suffered <br />alteration in some form</p>
                    <div>
                        <button className='btnfill mr-4'>Discover More</button>
                        <button className='btnt border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
                    <a href="#slide2" className="btn btn-circle bg-[#ffffff51] border-none text-white text-lg font-light">←</a>
                    <a href="#slide4" className="btn btn-circle bg-[#FF3811] border-none text-white text-lg font-light">→</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full h-[70vh]">
                <img src={banner4} className="w-full  rounded-xl" />
                <div className='absolute w-full h-full rounded-xl flex flex-col justify-center pl-28 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                    <h1 className='text-white font-bold'>Affordable <br />Price For Car <br />Servicing</h1>
                    <p className='mt-7'>There are many variations of passages of  available, but <br />the majority have suffered <br />alteration in some form</p>
                    <div>
                        <button className='btnfill mr-4'>Discover More</button>
                        <button className='btnt border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
                    <a href="#slide3" className="btn btn-circle bg-[#ffffff51] border-none text-white text-lg font-light">←</a>
                    <a href="#slide5" className="btn btn-circle bg-[#FF3811] border-none text-white text-lg font-light">→</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full h-[70vh]">
                <img src={banner5} className="w-full  rounded-xl" />
                <div className='absolute w-full h-full rounded-xl flex flex-col justify-center pl-28 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)] '>
                    <h1 className='text-white font-bold'>Affordable <br />Price For Car <br />Servicing</h1>
                    <p className='mt-7'>There are many variations of passages of  available, but <br />the majority have suffered <br />alteration in some form</p>
                    <div>
                        <button className='btnfill mr-4'>Discover More</button>
                        <button className='btnt border-white text-white'>Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5 mr-5">
                    <a href="#slide4" className="btn btn-circle bg-[#ffffff51] border-none text-white text-lg font-light">←</a>
                    <a href="#slide1" className="btn btn-circle bg-[#FF3811] border-none text-white text-lg font-light">→</a>
                </div>
            </div>

        </div>
    );
};

export default Banner;