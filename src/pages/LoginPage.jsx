import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='mt-48 ml-4 mr-4'>
        <h1 className='text-4xl text-center mb-4'>
        Login
        </h1>

        <form className='max-w-md mx-auto'>
            <input
            className='w-full border my-2 py-2 px-3 rounded-2xl'
            type='email'
            placeholder='your@email.com'
            />
            <input
            className='w-full border my-2 py-2 px-3 rounded-2xl'
            type='password'
            placeholder='password'
            />
            <button className='bg-[#FC4308] p-2 w-full text-white rounded-2xl'>
            Login
            </button>
            <div className='text-gray-500 mt-4'>
            Don't have an account yet? <Link className='underline text-black' to='/register'>Register Now</Link>
            </div>
        </form>
    </div>
  );
};

export default LoginPage;
