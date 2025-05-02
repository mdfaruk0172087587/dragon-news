import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate,  } from 'react-router';
import { AuthContext } from '../provider/AuthContext';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const {login} = use(AuthContext);
  const  location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    login(email, password)
    .then(result => {
      // console.log(result)
     navigate(location.state || '/')
    })
    .catch(error => {
      setErrorMessage(error.code)
    })

  }
    return (
      <div className='flex justify-center items-center min-h-screen'>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-6">
            <h1 className='text-2xl font-semibold text-center'>Login your account</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' required className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" required name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    {
                      errorMessage && <p className='text-error'>{errorMessage}</p>
                    }
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    
                    <p className='font-semibold mt-5'>Dont’t Have An Account ? <Link className='text-secondary' to='/auth/register'>Register</Link></p>
                </form>
            </div>
        </div>
      </div>
    );
};

export default Login;