
import React from 'react';
import error from '../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-row sm:flex-col  justify-center items-center px-4 text-center'>
            <img src={error}
            className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg' alt="" />

            <h1 className='mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800'>The Page You Are Locking For Is Not Found🥲</h1>
            <Link to={'/'}  className='mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800'>Come Back <span className='text-blue-500 font-bold'>Home</span></Link>
        </div>
    );
};

export default ErrorPage;