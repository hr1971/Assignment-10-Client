import React from "react";
import { Link } from "react-router"; // use react-router-dom

export const PartnerCard = ({ partner }) => {
  const {
    name,
    profileImage,
    subject,
    studyMode,
    availabilityTime,
    location,
    experienceLevel,
    rating,
    partnerCount,
    email,
    _id,
  } = partner;

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 overflow-hidden border border-gray-200">
      {/* Header strip */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-2 w-full"></div>

      {/* Content */}
      <div className="p-6 flex flex-col items-center text-center">
        {/* Profile Image */}
        <img
          src={
            profileImage ||
            "https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517430_1280.png"
          }
          alt={name}
          className="w-24 h-24 rounded-full object-cover border-4 border-blue-500 shadow-md mb-4"
          onError={(e) =>
            (e.target.src = "https://via.placeholder.com/100")
          }
        />

        {/* Name */}
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>

        {/* Subject */}
        <p className="text-sm text-gray-600 mt-1">{subject}</p>

        {/* Study Mode */}
        <p className="text-sm text-gray-600">Study Mode: {studyMode}</p>

        {/* Experience */}
        <p className="text-sm text-gray-600 mb-2">
          Experience Level: {experienceLevel}
        </p>

        {/* Rating */}
        <div className="flex justify-center items-center mb-3">
          <span className="text-yellow-400 text-lg">
            {"⭐".repeat(Math.round(rating))}
          </span>
          <span className="ml-2 text-sm text-gray-700">({rating}/5)</span>
        </div>

        {/* View Profile Button */}
        <Link
          to={`/partner-details/${_id}`}
          className="mt-auto w-full bg-blue-600 text-white text-sm font-semibold py-2 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default PartnerCard;