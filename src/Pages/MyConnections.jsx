import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Loading from "../Components/Loading/Loading";
import PartnerCard from "./PartnerCard";
import MyConnectionCard from "./MyConnectionCard";

const MyConnections = () => {

  useEffect(() => {
      document.title = "My Connection";
    });
  const { user } = use(AuthContext);
  const [study, setStudy] = useState([]);
  const [loading, setLoading] = useState(true);
    const [refetch, setRefecth] = useState(false)
  

  useEffect(() => {
    fetch(`http://localhost:5000/my-request?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudy(data);
        setLoading(false);
      });
  }, [user,refetch]);

  if (loading) {
    // return <Loading></Loading>;
  }

  return <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        
        {study.map((partner) => (
          <MyConnectionCard key={partner._id} partner={partner} />
        ))}
      </div>
  </div>;
};

export default MyConnections;
