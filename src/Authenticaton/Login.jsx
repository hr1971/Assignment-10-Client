import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="hero   min-h-screen">
      <div className="hero-content flex-col ">
        <h1 className="text-3xl font-bold text-blue-500">STUDYMATE.COM</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card bg-base-100  w-[500px]  shadow-2xl">
          <div className="card-body ">
            <h1 className="text-2xl font-bold text-center">
              Login Your Account
            </h1>

            <form onSubmit={""}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                
                  //   ref={emailRef}
                  required
                />

                <label className="label">Password</label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div>
                  <button
                    className="hover:underline cursor-pointer"
                    type="button"
                    onClick={``}
                  >
                    Forgot password?
                  </button>
                </div>
                {
                  //   error && <p className="text-red-500 text-xs">{error}</p>
                }

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
                </button>
                <button
                  type="button"
                  onClick={""}
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
              Don't Have An Account ?{" "}
              <Link to="/auth/register" className="text-red-500">
                Register
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
