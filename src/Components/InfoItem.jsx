import React from "react";

const InfoItem = ({ icon, label, value }) => {
  return (
    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-blue-100 rounded-xl p-3 hover:shadow-md transition-all">
      <div className="text-blue-600">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-semibold text-gray-800">{value || "N/A"}</p>
      </div>
    </div>
  );
};


export default InfoItem;
