import React from "react";
import { Link } from "react-router";
import { Star } from "lucide-react";

const HomeCard = ({ user }) => {
  const { name, profileimage, rating, subject, _id } = user;

  return (
    <div className="relative bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-300 text-white rounded-2xl p-6 shadow-xl overflow-hidden group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition duration-500"></div>

      {/* Floating glowing circle */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/30 rounded-full blur-2xl group-hover:scale-125 transition-all duration-700"></div>

      {/* Profile Image */}
      <div className="relative z-10 flex justify-center">
        <div className="relative">
          <img
            src={profileimage}
            alt={name}
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full border-2 border-cyan-200 animate-pulse opacity-60"></div>
        </div>
      </div>

      {/* User Info */}
      <div className="relative z-10 text-center mt-4">
        <h2 className="text-2xl font-bold drop-shadow-md">{name}</h2>
        <p className="text-sm opacity-90 mt-1 italic">{subject}</p>

        {/* Rating */}
        <div className="flex justify-center items-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={18}
              className={`${
                i < Math.round(rating)
                  ? "text-yellow-300 fill-yellow-300"
                  : "text-white/60"
              } transition duration-300`}
            />
          ))}
          <span className="ml-2 text-sm text-white/80">({rating}/5)</span>
        </div>

        {/* Button */}
        <Link
          to={`/partner-details/${_id}`}
          className="mt-5 inline-block w-full bg-white text-blue-600 font-semibold py-2.5 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
