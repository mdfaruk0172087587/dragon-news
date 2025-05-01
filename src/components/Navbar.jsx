import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-11/12 mx-auto flex justify-between items-center'>
            <div className=""></div>
            <div className="flex gap-3">
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/auth'>Auth</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-5">
                <img src="/src/assets/user.png" alt="" />
                <Link to='/auth/login' className='btn btn-primary '>Login</Link >
            </div>
        </div>
    );
};

export default Navbar;