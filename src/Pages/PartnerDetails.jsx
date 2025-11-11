import React, { useState } from 'react';
import Loading from '../Components/Loading/Loading';
import { Link, useLoaderData } from 'react-router';
import { 
  Star, MapPin, BookOpen, Users, Clock, 
  GraduationCap, Download, Trash2, Pencil, 
  User,
  UserPlus
} from "lucide-react";
import InfoItem from '../Components/InfoItem';

const PartnerDetails = () => {
  const [loading, setLoading] = useState(false);
  const data = useLoaderData();
  console.log(data);

  if (loading) {
    return <Loading />;
  }

  const handleRequest = () => {
    console.log("Download clicked!");
  };

  const handleDelete = () => {
    console.log("Delete clicked!");
  };

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10">
      <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 rounded-3xl shadow-lg border border-blue-100 overflow-hidden transition-all hover:shadow-xl">

        {/* Top Gradient Bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-sky-500"></div>

        <div className="flex flex-col md:flex-row gap-10 p-8 md:p-10">
          {/* Profile Image */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={data?.profileimage}
              alt={data?.name || "Profile"}
              className="w-56 h-56 object-cover rounded-2xl shadow-md border border-blue-200"
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-2/3 space-y-5">
            {/* Name + Rating */}
            <div className="flex flex-wrap items-center justify-between">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {data?.name}
              </h1>
              <div className="flex items-center gap-1 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-yellow-400" />
                <span>{data?.rating || "4.8"}</span>
              </div>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-gray-700">
              <InfoItem icon={<BookOpen />} label="Subject" value={data?.subject} />
              <InfoItem icon={<Clock />} label="Study Mode" value={data?.studyMode} />
              <InfoItem icon={<GraduationCap />} label="Experience Level" value={data?.experienceLevel} />
              <InfoItem icon={<Users />} label="Partner Count" value={data?.patnerCount} />
              <InfoItem icon={<MapPin />} label="Location" value={data?.location || "Not provided"} />
              <InfoItem icon={<Clock />} label="Availability" value={data?.availabilityTime} />
            </div>

            {/* Action Buttons */}
            <div onClick={handleRequest} className="flex flex-wrap gap-4 pt-6">
              <Link
                // to={`/update-model/${data?._id}`}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-0.5"
              >
                <UserPlus className="w-4 h-4" /> Send Request
              </Link>

              {/* <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 text-blue-700 font-semibold border border-blue-200 hover:bg-blue-200 transition-all"
              >
                <Download className="w-4 h-4" /> Download
              </button>

              <button
                onClick={handleDelete}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 hover:border-red-400 hover:text-red-600 transition-all"
              >
                <Trash2 className="w-4 h-4" /> Delete
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerDetails;
