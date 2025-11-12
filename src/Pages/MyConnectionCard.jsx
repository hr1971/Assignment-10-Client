import React, { use, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../Context/AuthContext';

const MyConnectionCard = ({partner}) => {
    const {name,profileimage,subject,studyMode} = partner
     const navigate = useNavigate();
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const [refetch, setRefecth] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/request/${id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setModel(data.result);
        console.log(" Api called!")
        console.log(data);
        setLoading(false);
      });
  }, [user, id, refetch]);

    const handleDlete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/request/${partner._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // navigate("/all-models");

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // setRefetch(!refetch)
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
     return (
    <div className="mt-15 bg-gradient-to-br from-blue-500 to-cyan-200 text-white rounded-xl shadow-lg p-6 w-full max-w-sm mx-auto">
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
          onClick={handleDlete}
          className="flex-1 ml-2 bg-red-500 text-white font-semibold py-2 rounded-lg shadow hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  );


};

export default MyConnectionCard;