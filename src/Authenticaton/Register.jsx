import React, { use, useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  useEffect(() => {
    document.title = "Register";
  });

  const [show, setShow] = useState(false);

  const {
    signInWithGoogle,
    createUserFunc,
    user,
    setUser,
    updateUserProfile,
    setLoading,
  } = use(AuthContext);

  const navigate = useNavigate();
  const from = location.state || "/";


  const handleRegister = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value 
    const password = form.password.value 
    const displayName = form.name.value 
    const photoURL = form.photo.value 
    // console.log({email,password,displayName,photoURL})

    // toast.loading('Creating user....')




    createUserFunc(email,password)
    .then(res => {
      navigate(from)
      
      updateUserProfile(displayName,photoURL)
      .then(() => {
        toast.success("User Created Successfully!")
      })
      .catch(error => {

      })
      .catch(error => {
        const errorMessage = error.message;
        toast.error(errorMessage)
      })
    })

  }


  const handleGoogleSignin = () => {
    signInWithGoogle()
    .then(res => {
        toast.success("User Created Successfully!")
        navigate(from)
        setLoading(false)
        setUser(res.user)
    })
    .catch(error => {
      toast.error(error.message)
      console.log(error)
    })
  }

  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col ">
        <h1 className="text-3xl font-bold text-blue-500">STUDYMATE.COM</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100  w-[500px]  shadow-2xl">
          <div className="card-body ">
            <h1 className="text-3xl font-bold text-center">
              Register Your Account
            </h1>

            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="your name"
                  name="name"
                  required
                />

                <label className="label">Photo URL</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="https://img.icons8.com/?size=100&id=9796&format=png"
                  name="photo"
                  required
                />

                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                  required
                />

                <div className="relative text-left">
                  <label className="label mb-1 text-left">Password</label>
                  <input
                    type={show ? "text" : "password"}
                    className="input w-full"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-[20px] top-[36px] cursor-pointer"
                  >
                    {show ? <FaEye /> : <IoEyeOff />}
                  </span>
                </div>

                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="flex items-center justify-center gap-3 border text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-200 transition-colors cursor-pointer mt-5"
                >
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="google"
                    className="w-5 h-5"
                  />
                  Continue with Google
                </button>
              </fieldset>
            </form>
            <p className="text-center font-semibold">
              Already Have An Account ?{" "}
              <Link to="/auth/login" className="text-red-500">
                Login
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
