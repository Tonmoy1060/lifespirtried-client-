import React from "react";
import chair from '../../assets/images/banne-final.jpg'
import bg from '../../assets/images/bg.png'
import Button from "../../Shared/Button";

const Banner = () => {
  return (
    <div style={{background: `url(${bg})`}} className='hero min-h-screen '>
      <div className="hero-content flex-col lg:flex-row-reverse lg:pb-28">
        <img
          src={chair}
          className="lg:max-w-2xl rounded-lg shadow-2xl hero-overlay bg-opacity-60"
        />
        <div className="my-10 lg:pb-0 lg:my-0">
          <h1 className="text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
