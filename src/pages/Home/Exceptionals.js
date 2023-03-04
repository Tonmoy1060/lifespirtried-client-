import React from "react";
import exceptional from '../../assets/images/hijama.jpg'
import Button from "../../Shared/Button";

const Exceptional = () => {
  return (
    <div className="hero min-h-screen grid content-center mb-14">
      <div className="hero-content flex-col gap-16 lg:flex-row ">
        <img
          src={exceptional}
          className="lg:max-w-xl rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-3xl font-bold">Exceptional Hijama Care, on Your Terms</h1>
          <p className="py-6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
          </p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
