import { format } from 'date-fns';
import React from 'react';
import HeaderIcon from '../assets/logo.png';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={HeaderIcon} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE , MMMM dd , yyyy")}</p>
        </div>
    );
};

export default Header;