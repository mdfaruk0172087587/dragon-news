import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
                <h1 className='text-2xl font-semibold text-center'>Register your account</h1>
                <div className="card-body">
                    <form className="fieldset">
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Name" />
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Photo URL" />
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                       
                        <button className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold mt-5'>All Rady Have An Account ? <Link className='text-secondary' to='/auth/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;