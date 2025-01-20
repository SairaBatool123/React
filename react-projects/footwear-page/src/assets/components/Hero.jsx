import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="container">
        <div className="row">
          <div className="hero-sec col-lg-6 col-sm-12 d-lg-flex flex-column justify-content-center">
            <h1 className="hero-content mt-sm-3 flex-wrap">
              YOUR FEET DESERVE THE BEST
            </h1>
            <p className="mt-4 me-5 flex-wrap">
              YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
              SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH
              OUR SHOES.
            </p>
            <div>
              <button
                class="text-light p-1 pe-3 ps-3 mt-lg-2 nav-btn"
                type="submit"
              >
                Shop Now
              </button>
              <button
                class="text-dark p-1 pe-3 ps-3 mt-lg-2 nav-btn1"
                type="submit"
              >
                Category
              </button>
            </div>
          </div>
          <div className="hero-img col-lg-6 col-sm-10">
            <img
              className="img-fluid mt-lg-5"
              src="./images/hero-image.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
