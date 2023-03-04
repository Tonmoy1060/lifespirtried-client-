import React from "react";
import Fluoride from '../../assets/images/fluoride.png';
import Filling from '../../assets/images/cavity.png';
import Whitening from '../../assets/images/whitening.png';
import Service from "./Service";

const Services = () => {
   const services = [
      {
         _id: 1,
         name: 'Fluoride Treatment',
         description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
         img: Fluoride
      },
      {
         _id: 2,
         name: 'Cavity Filling',
         description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
         img: Filling
      },
      {
         _id: 3,
         name: 'Teeth Whitening',
         description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
         img: Whitening
      },
      {
         _id: 4,
         name: 'Teeth Whitening',
         description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
         img: Whitening
      }
   ]
  return (
    <div className="lg:p-20 sm:p-14 md:p-20 mt-14 lg:mt-0 md:mt-0 p-5">
      <div className=" text-center mb-10">
        <h1 className="text-primary font-bold text-xl">OUR SERVICES</h1>
        <h1 className="text-4xl">Services We Provide</h1>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8  ">
         {
            services.map(service => <Service
               key={service._id}
               service={service}
            ></Service>)
         }
      </div>
    </div>
  );
};

export default Services;
