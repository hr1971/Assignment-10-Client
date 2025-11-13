import React, { use, useEffect } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';
import Loading from '../Components/Loading/Loading';

const Profile = () => {
    const {user,loading} = use(AuthContext)
    const navigate = useNavigate()

    useEffect(()=> {
        document.title = "My Profile";
        
        if (!loading && !user) {
            navigate('/login');
        }
    },[user,loading,navigate])

    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return null;
    }
     return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={user?.photoURL}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Photo is not given"
        />
        <div className="bg-base-200 p-5">
          <h1 className="text-2xl font-semibold">Name: {user?.displayName}</h1>
          <p className="py-4">Email:{user?.email}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;