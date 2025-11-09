import React, { use,  useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { toast } from "react-toastify";

const Login = () => {
  const { signInFunc, signInWithGoogle, setLoading, setUser } =
    use(AuthContext);
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password });

    signInFunc(email, password)
      .then((res) => {
        const user = res.user;
        e.target.reset();
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(errorCode);
      });
  };

  // google sign in

  const handleGoogleSignin = () => {
    signInWithGoogle().then((res) => {
      setLoading(false);
      setUser(res.user);
      navigate(from);
      toast.success("Login Successful");
    });
  };

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

            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Email"
                  name="email"
                  ref={emailRef}
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
                <div className="text-left">
                  <button
                    className="hover:underline cursor-pointer "
                    type="button"
                    onClick={``}
                  >
                    Forgot password?
                  </button>
                </div>
                {error && <p className="text-red-500 text-xs">{error}</p>}

                <button type="submit" className="btn btn-neutral mt-4">
                  Login
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
