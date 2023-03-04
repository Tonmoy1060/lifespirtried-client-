import React from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import auth from "../../firebase.init";
// import useToken from "../../hooks/useToken";
import Loading from "../../Shared/Loading";


const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
    

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

//   const [token] = useToken(user || gUser);
  
  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(email, password);

    event.target.reset();
  };



  const from = location.state?.from?.pathname || "/";
  if (user || gUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="lg:max-w-xs max-w-sm mx-auto pt-14 pb-10 mt-12 mb-14 p-2">
      <div className="card max-w-full bg-base-100 shadow-lg ">
        <div className="card-body ">
          <h2 className="text-center  text-2xl text-info font-bold pb-1 font-serif">
            login
          </h2>
          <form onSubmit={handleLogin} action="">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {/* <span className="label-text">Your Email</span> */}
              </label>
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input  shadow-md w-full max-w-xs mb-3"
                required
              />
             
            </div>
            <div className="form-control w-full  max-w-xs ">
              
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input shadow-md  w-full max-w-xs"
              />
              <label className="label">
                {/* <span className="label-text-alt text-red-500">{error?.message}</span> */}
              </label>
            </div>

            <button className="btn shadow-xl btn-info text-white w-2/4">Login</button>
          </form>
          <label className="pt-1 font-serif ">
            {/* <span className="label-text-alt">Alt label</span> */}
            <p className="pt-1 pb-0 ">
              <small>
                New Here?{" "}
                <Link className="text-green-500" to="/registration">
                  {" "}
                  Register now
                </Link>
              </small>
            </p>
            <p>
              <small>
                Forgot Password?{" "}
                <Link className="text-red-500" to="/register">
                  {" "}
                  Reset Password
                </Link>
              </small>
            </p>
          </label>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-accent text-white my-2 shadow-xl"
          >
            <img src={google} alt="" />
            google login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
