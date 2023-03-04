import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../firebase.init";
import logo from "../assets/top-logo.png";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignOut = (event) => {
    event.preventDefault();
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  return (
    <div className="">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu font-semibold menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28 "
            >
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"menu"}>Menu</Link>
              </li>

              <li>
                <Link to={"about"}>About</Link>
              </li>

              <li>
                <Link to={"contact"}>Contact</Link>
              </li>

              {user && (
                <li className="font-semibold hover:underline hover:text-secondary  decoration-secondary decoration-4 underline-offset-[32.5px]">
                  <Link to="dashboard">Dashboard</Link>
                </li>
              )}

              {user ? (
                <li className="font-semibold rounded-full hover:text-secondary text-white  bg-primary">
                  <Link onClick={handleSignOut} to="login">
                    Sign Out
                  </Link>
                </li>
              ) : (
                <li className=" font-semibold  rounded-full text-white  bg-primary decoration-secondary ">
                  <Link to={"login"}>Login</Link>
                </li>
              )}
            </ul>
          </div>
          <div className=" flex items-center">
            <img className="w-10/12 p-2 lg:px-8" src={logo} alt="" />
          </div>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal flex-nowrap justify-end p-0">
            <li className="  hover:underline hover:text-secondary decoration-secondary decoration-4 underline-offset-[32.5px] ">
              <Link className="rounded font-semibold px-6" to={"/"}>Home</Link>
            </li>

            <li className=" rounded hover:underline hover:text-secondary  decoration-secondary decoration-4 underline-offset-[32.5px]">
              <Link className="rounded font-semibold px-6" to={"menu/"}>Menu</Link>
            </li>

            <li className="  hover:underline hover:text-secondary  decoration-secondary decoration-4 underline-offset-[32.5px]">
              <Link className="rounded font-semibold px-6" to={"about"}>About</Link>
            </li>

            <li className="  hover:underline hover:text-secondary  decoration-secondary decoration-4 underline-offset-[32.5px]">
              <Link className="rounded font-semibold px-6" to={"contact"}>Contact</Link>
            </li>

            {user && (
              <li className=" hover:underline hover:text-secondary  decoration-secondary decoration-4 underline-offset-[32.5px]">
                <Link className="rounded font-semibold px-6" to="dashboard">Dashboard</Link>
              </li>
            )}

            {user ? (
              <li className=" hover:underline hover:text-secondary  decoration-secondary decoration-4 underline-offset-[32.5px]">
                <Link className="font-semibold rounded-full text-white  bg-primary px-5 lg:mx-1" onClick={handleSignOut} to="login">
                  Sign Out
                </Link>
              </li>
            ) : (
              <li className=" hover:underline hover:text-secondary  decoration-secondary  decoration-4 underline-offset-[32.5px]">
                <Link className="font-semibold  rounded-full text-white  bg-primary px-6 lg:mx-1" to={"login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
