import React from 'react'
import hand_icon from '../../assets/hand_icon.png'
import arrow_icon from "../../assets/arrow.png";
import hero_image from "../../assets/hero_image.png";

const Hero = () => {
  return (
    <>
      <div className="hero column-2  flex justify-center items-center bg-gradient-to-b from-[#fde1ff] via-[#e1ffea22] to-transparent h-screen gap-x-80">
        <div className="left">
          <h2 className="font-bold ">NEW ARRIVALS ONLY</h2>
          <div className="hand-icon [&>*]:text-5xl  font-bold">
            <div className="flex items-center ">
              <p>new</p>
              <img className="w-15" src={hand_icon} alt="" srcset="" />
            </div>

            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest my-5">
            <button
              type="button"
              className="text-white 
              bg-red-600
              hover:bg-red-500 font-small rounded-full text-sm px-5 py-2 me-2 mb-2"
            >
              Latest Collection
            </button>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right size-95 mb-50">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </>
  );
}
export default Hero;
