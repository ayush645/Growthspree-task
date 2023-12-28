import React from "react";
import eye from "../images/eye.svg";

const Page3 = () => {
  return (
    <div className="py-8 p-24">
      <div className="flex justify-center items-center">
        <span class="before:block before:absolute before:-inset-1 before:bg-gradient-to-r p-1 from-[#BBEAF3] to-[#58B6D3] ... relative inline-block">
          <span class="relative text-black font-bold text-3xl">
            Benefits of the Integration{" "}
          </span>
        </span>{" "}
      </div>

      <div className="flex justify-center gap-6 mt-12">
        <div className="bg-[#F4F4F4] flex gap-6 p-6 px-12 rounded-lg">
          <div className=" border-r-2 border-[#D9D9D9] flex justify-center items-center p-2 px-3">
            <img src={eye} alt="" />
          </div>
          <div>
            <span>
              <b> One-View </b> of <br />
              the customer in <br /> <b>Salesforce</b>{" "}
            </span>
          </div>
        </div>

        <div className="bg-[#F4F4F4] flex gap-6 p-6 px-12 rounded-lg">
          <div className=" border-r-2 border-[#D9D9D9] flex justify-center items-center p-2 px-3">
            <img src={eye} alt="" />
          </div>
          <div>
            <span>
              Empowers agents with <br /> <b>real-time</b> access to{" "}
              <b>
                {" "}
                social <br /> media conversations{" "}
              </b>
            </span>
          </div>
        </div>

        <div className="bg-[#F4F4F4] flex gap-6 p-6 px-12 rounded-lg">
          <div className=" border-r-2 border-[#D9D9D9] flex justify-center items-center p-2 px-3">
            <img src={eye} alt="" />
          </div>
          <div>
            <span>
              <b> Lead generation </b> from <br /> social media created as{" "}
              <br /> opportunities in <b>SFDC</b>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col mt-12">
        <button className=" bg-[#EDCD54] p-3 rounded-full px-8 font-bold hover:bg-yellow-300 hover:transform hover:scale-110 duration-150">
          Get a Free Trial
        </button>
        <span className="font-semibold mt-2">NO CC REQUIRED</span>
      </div>

      <div className="flex flex-col gap-3 justify-center items-center mt-16">
        <div className="flex gap-3">
          <span class="before:block before:absolute before:-inset-1 before:bg-gradient-to-r p-1 from-[#BBEAF3] to-[#58B6D3] ... relative inline-block">
            <span class="relative text-black font-bold text-3xl">Unify</span>
          </span>{" "}
          <span class=" text-black font-bold text-3xl">your</span>
          <span class="before:block before:absolute before:-inset-1 before:bg-gradient-to-r p-1 from-[#BBEAF3] to-[#58B6D3] ... relative inline-block">
            <span class="relative text-black font-bold text-3xl">
              Customer Care
            </span>
          </span>{" "}
          <span class=" text-black font-bold text-3xl">and</span>
          <span class="before:block before:absolute before:-inset-1 before:bg-gradient-to-r p-1 from-[#BBEAF3] to-[#58B6D3] ... relative inline-block">
            <span class="relative text-black font-bold text-3xl">
              Marketing Insights{" "}
            </span>
          </span>{" "}
        </div>
        <span className="text-xl mt-3 text-zinc-700">
          Stop spending on 10+ tools and save up to 91% of your SaaS spend.
        </span>
      </div>

      
    </div>
  );
};

export default Page3;
