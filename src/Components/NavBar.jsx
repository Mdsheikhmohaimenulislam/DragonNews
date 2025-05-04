import React from 'react';
import logo from '../../public/logo.png'
import { format } from 'date-fns';

const NavBar = () => {
    return (
        <div className='w-11/12 mx-auto mt-10 mb-10'>
            <div className='flex flex-col items-center space-y-4'>
                <img className='w-2/6' src={logo} alt="" />
                <h1 className='text-accent'>Journalism Without Fear or Favour</h1>
                <p className='text-accent'>{format( new Date(), "EEEE , MMMM d , yyyy")}</p>
            </div>
        </div>
    );
};

export default NavBar;