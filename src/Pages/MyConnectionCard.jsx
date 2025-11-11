import React from 'react';
import { Link } from 'react-router';

const MyConnectionCard = ({partner}) => {
    const {name,profileimage,subject,studyMode} = partner
    // console.log(partner)
     return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto">
      {/* Profile Image */}
      <div className="flex justify-center">
        <img
          src={profileimage}
          alt={name}
          className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-xl font-bold text-center mt-4">{name}</h2>

      {/* Subject */}
      <p className="text-sm text-center mt-2 opacity-90">Subject : {subject}</p>

      {/* Study Mode */}
      <p className="text-sm text-center mt-1 italic opacity-80">Study Mode : {studyMode}
      </p>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <Link
          
          to={`/update-partner/${partner._id}`}
          className="flex-1 mr-2 bg-white text-blue-600 font-semibold py-2 rounded-lg shadow hover:bg-blue-100 transition"
        >
          Update
        </Link>
        <button
          onClick={`onDelete`}
          className="flex-1 ml-2 bg-red-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );


};

export default MyConnectionCard;