import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const Navber = () => {

    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 py-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <img src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex items-center gap-4 mr-4'>
                    <MdOutlineShoppingBag className='text-xl' />
                    <CiSearch  className='text-xl'/>
                </div>
                <a className="btnt">Appointment</a>
            </div>
        </div>
    );
};

export default Navber;