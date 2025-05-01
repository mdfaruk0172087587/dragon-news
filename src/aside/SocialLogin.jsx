import React from 'react';
import { FaSquareGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h1 className='font-bold text-xl mb-5'>Login Whit</h1>
            <div className='space-y-3'>
                <button className='btn w-full btn-outline btn-secondary'><FcGoogle size={25}/> Login Whit Google</button>
                <button className='btn btn-primary w-full btn-outline'><FaSquareGithub size={25} />
                Login Whit Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;