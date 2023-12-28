import React from "react";
import logo from "../images/logo.png";
import MCD from "../images/MCD.png";
import airIndia from "../images/airIndia.png";
import honda from "../images/honda.png";
import ooredoo from "../images/ooredoo.png";
import wolkswagen from "../images/wolkswagen.png";
import zomato from "../images/zomato.png";
import decathlon from "../images/decathlon.png";
import oppo from "../images/oppo.png";
import { PiWarningCircleLight } from "react-icons/pi";

const Page1 = () => {
  return (
    <div className="bg-gradient-to-r from-[#1D3148] to-[#121826] ... h-full">
      <div className="flex justify-between px-28 py-6 border-b-2 border-[#163A59]">
        <div>
          <img src={logo} alt="custom-logo" />
        </div>
        <div>
          <button className="bg-[#EDCD54] p-3 rounded-full px-8 font-bold hover:bg-yellow-300 hover:transform hover:scale-110 duration-150">
            Get a Free Trial
          </button>
        </div>
      </div>
      <div className="flex p-24">
        <div className="flex-1 flex flex-col gap-8">
          <p className="text-white font-semibold text-6xl">
            <span className="before:block before:absolute before:-inset-1 before:bg-gradient-to-r from-[#BBEAF3] to-[#58B6D3] ... relative inline-block">
              <span className="relative text-white">#1 Alternative</span>
            </span>{" "}
            to
            <br /> <span className="text-[#EDCD54]">Social Studio.</span> <br /> Seamlessly Integrate <br /> with Salesforce
          </p>
          <p className="font-semibold text-xl text-[#A6B6C4]">
            <b>Introducing Custom Insights</b>, an <b>ALL-IN-ONE</b> <br /> platform for{" "}
            <b>Social Listening, Social Care, Social <br /> Analytics, Social Publishing</b> and much more!
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="bg-[#09243C] border-4 border-[#163A59] flex flex-col gap-3 p-8 w-4/6 rounded-xl">
            <label htmlFor="name" className="text-[#9CA5AD] font-medium text-lg">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#163A59] placeholder:text-[#C1C1C15C] h-10 p-3 rounded-md w-full"
            />
            <label htmlFor="name" className="text-[#9CA5AD] font-medium text-lg">
              Email{" "}
            </label>
            <input
              type="email"
              placeholder="yourid@mail.com"
              className="bg-[#163A59] placeholder:text-[#C1C1C15C] h-10 p-3 rounded-md w-full"
            />
            <label htmlFor="name" className="text-[#9CA5AD] font-medium text-lg flex gap-1">
              Mobile <PiWarningCircleLight className="text-black bg-yellow-300 rounded-full mt-1" />
            </label>
            <input
              type="number"
              placeholder="000-000-0000"
              className="bg-[#163A59] placeholder:text-[#C1C1C15C] h-10 p-3 rounded-md w-full"
            />
            <label htmlFor="Alpha" className="text-[#9CA5AD] font-medium text-lg">
              Company Name{" "}
            </label>
            <input
              type="text"
              placeholder="Your Company"
              className="bg-[#163A59] placeholder:text-[#C1C1C15C] h-10 p-3 rounded-md w-full"
            />
            <div className="flex justify-end items-end flex-col text-[#EDCD54] mt-2">
              <button className="bg-[#EDCD54] p-3 text-md rounded-full px-8 w-1/2 text-black font-bold hover:bg-yellow-300 hover:transform hover:scale-110 duration-150">
                Get a Free Trial
              </button>
              <p className="mr-4 text-sm mt-1">No Credit Card Required</p>
            </div>
          </div>
        </div>
      </div>
      {/* -------------------custom brands section --------------- */}
      <div className="flex flex-col justify-center items-center">
        <span className="text-[#A6B6C4] font-medium tracking-widest text-lg">
          TRUSTED BY 1000+ CUSTOM BRANDS
        </span>
        <div className="flex gap-20 mt-8 mb-20">
          <img src={MCD} alt="" className="h-9" />
          <img src={airIndia} alt="" className="h-9" />
          <img src={oppo} alt="" />
          <img src={ooredoo} alt="" className="h-9" />
          <img src={wolkswagen} alt="" className="h-9" />
          <img src={zomato} alt="" className="h-9" />
          <img src={decathlon} alt="" className="h-9" />
          <img src={honda} alt="" className="h-9" />
        </div>
      </div>
    </div>
  );
};

export default Page1;
