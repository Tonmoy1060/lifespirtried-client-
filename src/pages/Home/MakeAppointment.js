import React from "react";
import background from "../../assets/images/appointment.png";
import doctor from "../../assets/images/doctor-small.png";
import Button from "../../Shared/Button";

const MakeAppointment = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ background: `url(${background})` }}
    >
      <div className="flex-1  hidden lg:block">
        <img className="mt-[-80px]" src={doctor} alt="" />
      </div>
      <div className="text-white flex-1 px-10 p-6 lg:px-28">
        <h1 className="text-4xl">Make an appointment Today</h1>
        <p className="py-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="">
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default MakeAppointment;
