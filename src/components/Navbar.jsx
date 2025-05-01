import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center'>
            <div className=""></div>
            <div className="flex gap-3">
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/about'>About</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-5">
                <img src="/src/assets/user.png" alt="" />
                <button className='btn btn-primary '>Login</button>
            </div>
        </div>
    );
};

export default Navbar;