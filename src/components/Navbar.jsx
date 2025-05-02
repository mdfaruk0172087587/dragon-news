import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../provider/AuthContext';
import UserIcon from '../assets/user.png';

const Navbar = () => {
    const {user, logOut} = use(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{
            alert('LogOut successfully')
        })
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <div className='w-11/12 mx-auto flex justify-between items-center'>
            <div className="">{user && user.email}</div>
            <div className="flex gap-3">
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/auth'>Auth</NavLink>
            <NavLink className={({isActive}) => isActive? 'underline' : ''} to='/career'>Career</NavLink>
            </div>
            <div className="flex gap-5">
                <img className='w-12 rounded-full h-12' src={`${user? user.photoURL: UserIcon}`} alt="" />
                {
                    user? <button onClick={handleLogOut} className='btn btn-primary ' >LogOut</button>:  <Link to='/auth/login' className='btn btn-primary '>Login</Link >
                }
               
            </div>
        </div>
    );
};

export default Navbar;