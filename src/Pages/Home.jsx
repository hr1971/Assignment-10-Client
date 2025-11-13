import React from 'react';
import Slider from '../Components/Slider';
import { useLoaderData } from 'react-router';
import HomeCard from '../Components/HomeCard';
import Review from '../Review';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            
            <Slider></Slider>

            <div className='text-center text-3xl text-blue-500 font-bold mt-10'>
            Top Study Partner
            </div>
            
        <div className='grid grid-cols-3 gap-3 mt-10'>
        {
            data.map(user => <HomeCard key={user._id} user={user}></HomeCard>)
        }
        </div>

        <Review></Review>

        </div>
    );
};

export default Home;