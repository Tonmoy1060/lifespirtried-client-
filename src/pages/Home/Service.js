import React from "react";
import Button from "../../Shared/Button";

const Service = ({ service }) => {
  return (
    <div className="card lg:max-w-max bg-base-100 shadow-xl">
      <figure className="px-14 pt-10">
        <img
          src={service?.img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{service?.name}</h2>
        <p>{service?.description}</p>
        <div className="card-actions">
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Service;
