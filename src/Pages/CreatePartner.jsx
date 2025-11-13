import React, { use, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CreatePartner = () => {
  useEffect(() => {
    document.title = "Create Profile";
  });

  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      profileimage: e.target.photo.value,
      subject: e.target.subject.value,
      studyMode: e.target.modes.value,
      availabilityTime: e.target.time.value,
      location: e.target.location.value,
      experienceLevel: e.target.experience.value,
      rating: e.target.rating.value,
      patnerCount: 0,
      email: user.email,
    };

    fetch("https://assignment-10-server-gamma-ten.vercel.app/students", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        // toast.success("Successfully Added");
        Swal.fire({
          title: "Good job!",
          text: "Successfully Added!",
          icon: "success",
        });
        // console.log(data);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Partner Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="text-left">
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Modes Dropdown */}
          <div className="text-left">
            <label className="label font-medium">Modes</label>
            <select
              defaultValue={""}
              name="modes"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Study Mode
              </option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>
          {/* subjects */}
          <div className="text-left">
            <label className="label font-medium">Subjects</label>
            <select
              defaultValue={""}
              name="subject"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select Subject
              </option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Computer Science">Computer Science</option>
              <option value="English">English</option>
              <option value="Biology">Biology</option>
              <option value="Economics">Economics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Business Studies">Business Studies</option>
            </select>
          </div>

          {/* experience */}

          <div className="text-left">
            <label className="label font-medium">Experience</label>
            <select
              defaultValue={""}
              name="experience"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select level
              </option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

          {/*time  */}
          <div className="text-left">
            <label className="label font-medium">Availability</label>
            <input
              type="text"
              name="time"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Evening 6–9 PM"
            />
          </div>

          {/* location */}

          <div className="text-left">
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Dhaka"
            />
          </div>

          {/* rating */}

          <div className="text-left">
            <label className="label font-medium">Rating</label>
            <input
              type="number"
              step="0.1"
              name="rating"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="5.0"
            />
          </div>

          {/* partner count */}

          <div className="text-left">
            <label className="label font-medium">Partner Count</label>
            <input
              type="number"
              name="partner"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="0"
              defaultValue={"0"}
            />
          </div>

          {/* Thumbnail URL */}
          <div className="text-left">
            <label className="label font-medium">Photo URL</label>
            <input
              type="url"
              name="photo"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          {/*  */}
          <div className="text-left">
            <label className="label font-medium text-left">Email</label>
            <input
              type="email"
              name="email"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com"
              defaultValue={user.email}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-blue-500 to-cyan-200 hover:from-blue-600 hover:to-sky-700"
          >
            Create Profile
          </button>
          {/* from-blue-500 to-[#B8B8FF] */}
        </form>
      </div>
    </div>
  );
};

export default CreatePartner;
