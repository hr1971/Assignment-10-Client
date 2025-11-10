import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";

const CreatePartner = () => {
  const { user } = use(AuthContext);

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Partner Profile
        </h2>
        <form onSubmit={``} className="space-y-4">
          {/* Name Field */}
          <div  className="text-left">
            <label className="label font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter name"
            />
          </div>

          {/* Category Dropdown */}
          <div  className="text-left">
            <label className="label font-medium">Modes</label>
            <select
              defaultValue={""}
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Study Mode
              </option>
              <option value="Vehicles">Online</option>
              <option value="Plants">Offline</option>
              
            </select>
          </div>
          {/* subjects */}
          <div  className="text-left">
            <label className="label font-medium">Subjects</label>
            <select
              defaultValue={""}
              name="category"
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
              <option
                value="Economics">
                Economics
              </option>
              <option value="Chemistry">Chemistry</option>
              <option
                value="Business Studies"
              >
                Business Studies
              </option>
            </select>
          </div>

          {/* experience */}

           <div  className="text-left">
            <label className="label font-medium">Experience</label>
            <select
              defaultValue={""}
              name="category"
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
         <div  className="text-left">
            <label className="label font-medium">Availability</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Evening 6–9 PM"
            />
          </div>

          

          {/* location */}

           <div  className="text-left">
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Dhaka"
            />
          </div>

          {/* rating */}

           <div  className="text-left">
            <label className="label font-medium">Rating</label>
            <input
              type="number"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="5.0"
            />
          </div>

         {/* partner count */}

          <div  className="text-left">
            <label className="label font-medium">Partner Count</label>
            <input
              type="number"
              name="name"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="0"
              defaultValue={'0'}
            />
          </div>

          {/* Thumbnail URL */}
          <div  className="text-left">
            <label className="label font-medium">Photo URL</label>
            <input
              type="url"
              name="thumbnail"
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
              name="thumbnail"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com"
              defaultValue={user.email}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-blue-500 to-[#B8B8FF] hover:from-blue-600 hover:to-sky-700"
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
