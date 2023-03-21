import React from "react";
import Banner from "./Banner";
import ContactForm from "./ContactForm";
import Exceptional from "./Exceptionals";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Service from "./Service";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <div className="hidden lg:block">
        <Banner></Banner>
        <Info></Info>
        <Services></Services>
        <Exceptional></Exceptional>
        <MakeAppointment></MakeAppointment>
        <Testimonials></Testimonials>
        <ContactForm></ContactForm>
      </div>
      <div className="block lg:hidden">
        <Services></Services>
        <Info></Info>
        <Exceptional></Exceptional>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
};

export default Home;
