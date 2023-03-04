import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import google from "../../assets/google.png";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from "../../Shared/Loading";
// import useToken from "../../hooks/useToken";

const Registration = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [updateProfile, eUpdating, updateError] = useUpdateProfile(auth);

//   const [token] = useToken(user || gUser);
  

  const  registerButton = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
   //  const number = event.target.number.value;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({displayName: name})
    event.target.reset();
  };

  if(loading || gLoading || eUpdating) {
    return <Loading></Loading>
  }

  const from = location.state?.from?.pathname || "/";
  if(user || gUser){
    navigate(from, { replace: true });
  }

  return (
    <div className="lg:max-w-xs max-w-sm mx-auto pt-10 pb-8 mt-8 mb-14 p-2">
      <div className="card max-w-full bg-base-100 shadow-lg ">
        <div className="card-body">
          <h2 className="text-center text-2xl font-serif text-info font-bold ">
            Sign Up
          </h2>
          <form onSubmit={registerButton} action="">
            <div className="form-control w-full max-w-xs">
              
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                className="input  shadow-md w-full max-w-xs my-2"
                required
              />
             
            </div>
            <div className="form-control w-full max-w-xs">
             
              <input
                name="email"
                type="email"
                placeholder="Email"
                className="input  shadow-md w-full max-w-xs my-2"
                required
              />
              
            </div>
            <div className="form-control w-full max-w-xs">
              
              <input
                name="password"
                type="password"
                placeholder="Password"
                className="input  shadow-md w-full max-w-xs my-2"
                required
              />
              <label className="label">
                {/* <span className="label-text-alt">Alt label</span> */}
              </label>
            </div>

            <button className="btn btn-info shadow-xl text-white w-2/4">Sign Up</button>
            <label className="pt-1">
              {/* <span className="label-text-alt">Alt label</span> */}
              <p className="pt-1  font-serif">
                <small>
                  Already Registered?{" "}
                  <Link className="text-green-500" to="/login">
                    {" "}
                    Please login
                  </Link>
                </small>
              </p>
            </label>
          </form>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn shadow-xl btn-accent text-white">
            <img src={google} alt="" />
            google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
