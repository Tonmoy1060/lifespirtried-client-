import React from "react";
import Button from "../../Shared/Button";

const Service = ({ service }) => {
  return (
    <div className="card lg:max-w-max bg-base-100 shadow-xl">
      <figure className="lg:px-14 lg:pt-10 pt-5">
        <img
          src={service?.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body px-2 lg:px-10   md:px-3 py-5 md:py-5 lg:py-10 items-center text-center">
        <h2 className="card-title">{service?.name}</h2>
        <p className="hidden md:block lg:block">{service?.description}</p>
        <div className="card-actions">
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
