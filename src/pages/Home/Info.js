import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  return (
    <div className="grid  lg:grid-cols-3 md:grid-cols-3 gap-6">
      <div className="hero-content flex-col lg:flex-row bg-primary rounded-lg">
        <img src={clock} className="max-w-sm rounded-lg my-5" />
        <div>
          <h1 className="text-2xl font-bold text-white">Opening Hours</h1>
          <p className="py-2 text-white text-sm">
            Lorem Ipsum is simply dummy text of the pri
          </p>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row rounded-lg  bg-accent">
        <img src={marker} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold text-white">Visit our location</h1>
          <p className="py-2 text-white text-sm">
            Brooklyn, NY 10036, United States
          </p>
        </div>
      </div>
      <div className="hero-content flex-col lg:flex-row rounded-lg bg-secondary">
        <img src={phone} className="max-w-sm rounded-lg" />
        <div>
          <h1 className="text-2xl font-bold text-white">Contact us now</h1>
          <p className="py-2 text-white text-sm">+000 123 456789</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
