import React from 'react';
import { Link } from 'react-router';

const HomeCard = ({user}) => {
    const {name,profileimage,rating,subject,_id} = user
     return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition duration-300">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={profileimage}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      {/* User Name */}
      <h2 className="text-2xl font-bold text-center mt-4">{name}</h2>

      {/* Subjects & Skills */}
      <p className="text-sm text-center mt-2 opacity-90">
        {subject}
      </p>

      {/* Ratings */}
      <div className="flex justify-center items-center mt-3">
        <span className="text-yellow-300 text-lg">
          {"⭐".repeat(Math.round(rating))}
        </span>
        <span className="ml-2 text-sm">({rating}/5)</span>
      </div>

      {/* View Profile Button */}
     <Link
  to={`/partner-details/${_id}`}
  className="mt-5 inline-block w-full text-center 
             bg-white text-black font-semibold py-2 px-4 
             rounded-lg shadow-md 
             hover:bg-blue-700 hover:shadow-lg 
             transition duration-300 ease-in-out"
>
  View Profile
</Link>


    </div>
  );




};

export default HomeCard;