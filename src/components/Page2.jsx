import React from "react";
import settingsIcon from "../images/settings.svg";
import reloadIcon from "../images/reload.svg";
import badgeIcon from "../images/badge.svg";
import phoneIcon from "../images/phone.svg";
import bookIcon from "../images/book.svg";
import youtubeIcon from "../images/youtube.svg";
import mailIcon from "../images/mail.svg";
import appleIcon from "../images/apple.svg";
import playstoreIcon from "../images/playstore.svg";
import googleIcon from "../images/google.svg";
import blogIcon from "../images/blog.svg";
import whatsappIcon from "../images/whatsapp.svg";
import wwwIcon from "../images/www.svg";
import adsIcon from "../images/ads.svg";
import analyticsIcon from "../images/analytics.svg";
import apiIcon from "../images/api.svg";
import telegramIcon from "../images/telegram.svg";
import redditIcon from "../images/reddit.svg";
import quoraIcon from "../images/quora.svg";
import trustIcon from "../images/trust.svg";

const Page2 = () => {
  return (
    <>
      <div className="p-24 py-16">
        <div className="flex justify-center items-center">
          <span className="font-bold text-3xl">
            Why Konnect Insights is the Best &nbsp;{" "}
          </span>{" "}
          <span className="before:block before:absolute before:-inset-1 before:bg-gradient-to-r p-1 from-[#BBEAF3] to-[#58B6D3] ... relative inline-block">
            <span className="relative text-black font-bold text-3xl">
              Social Studio Alternative ?{" "}
            </span>
          </span>{" "}
        </div>

        <div className="flex mt-12 gap-6 px-28 items-center justify-center">
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={settingsIcon} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={reloadIcon} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={badgeIcon} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className="border-r-2 border-[##6B7280] p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={phoneIcon} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
          <div className="p-6 px-8 flex flex-col gap-2">
            <div className="flex justify-center items-center">
              <img src={bookIcon} alt="" />
            </div>
            <div className="flex justify-center items-center">
              <span className=" text-base font-medium">
                Create rules to <br /> automate pushing <br /> tickets
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center flex-col mt-8">
            <button className="bg-[#EDCD54] p-3 rounded-full px-8 font-bold hover:bg-yellow-300 hover:transform hover:scale-110 duration-150">
              Get a Free Trial
            </button>
            <span className="font-semibold mt-2">NO CC REQUIRED</span>
          </div>
        </div>
      </div>
      <div className="bg-[#F4F4F4] flex flex-col items-center gap-8 py-4">
        <span className="font-bold text-xl tracking-wider">
          3000+ INTEGRATION & 100% DATA COVERAGE ACROSS THE INTERNET!
        </span>
        <div className="flex gap-12">
          <img src={youtubeIcon} alt="" />
          <img src={mailIcon} alt="" />
          <img src={appleIcon} alt="" />
          <img src={playstoreIcon} alt="" />
          <img src={googleIcon} alt="" />
          <img src={blogIcon} alt="" />
          <img src={whatsappIcon} alt="" />
          <img src={wwwIcon} alt="" />
          <img src={adsIcon} alt="" />
          <img src={analyticsIcon} alt="" />
          <img src={apiIcon} alt="" />
          <img src={telegramIcon} alt="" />
          <img src={redditIcon} alt="" />
          <img src={quoraIcon} alt="" />
          <img src={trustIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default Page2;
