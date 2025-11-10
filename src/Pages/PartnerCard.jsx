import React from "react";
import { Link } from "react-router";

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
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl p-4 flex flex-col items-center text-center border border-gray-100">
      <img
        src={profileImage || 'https://cdn.pixabay.com/photo/2017/07/18/23/23/user-2517430_1280.png'}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-2 border-sky-400 mb-3"
        onError={(e) => (e.target.src = "https://via.placeholder.com/100")} // fallback
      />

      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-sm text-gray-600 mt-1">{subject}</p>
      <p className="text-sm text-gray-600">Study Mode - {studyMode}</p>
      <p className="text-sm text-gray-600 mb-3">Experience Level - {experienceLevel}</p>

      <Link
        to={`/partner-details/${_id}`}
        className="mt-auto bg-sky-500 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors"
      >
        View Profile
      </Link>
    </div>
  );
};

export default PartnerCard;

