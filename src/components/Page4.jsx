import React from "react";
import trendCharts from "../images/trendCharts.svg"

const Page4 = () => {
  return (
    <div className="py-1 p-24">
      <div className="flex justify-center items-center mt-12 gap-4 cursor-pointer">
        <div className="border border-red-700 bg-red-200 rounded-md flex justify-center items-center p-2">
          <span className=" text-sm tracking-wide">SOCIAL LISTENING</span>
        </div>
        <div className="border border-zinc-300 bg-zinc-200 rounded-md flex justify-center items-center p-2 hover:border-red-700 hover:bg-red-200">
          <span className=" text-sm tracking-wide">ONLINE REPUTATION</span>
        </div>
        <div className="border border-zinc-300 bg-zinc-200 rounded-md flex justify-center items-center p-2 hover:border-red-700 hover:bg-red-200">
          <span className=" text-sm tracking-wide">SOCIAL CRM</span>
        </div>
        <div className="border border-zinc-300 bg-zinc-200 rounded-md flex justify-center items-center p-2 hover:border-red-700 hover:bg-red-200">
          <span className=" text-sm tracking-wide">SOCIAL ANALYTICS</span>
        </div>
        <div className="border border-zinc-300 bg-zinc-200 rounded-md flex justify-center items-center p-2 hover:border-red-700 hover:bg-red-200">
          <span className=" text-sm tracking-wide">SOCIAL PUBLISHING</span>
        </div>
        <div className="border border-zinc-300 bg-zinc-200 rounded-md flex justify-center items-center p-2 hover:border-red-700 hover:bg-red-200">
          <span className=" text-sm tracking-wide">SURVEYS & FEEDBACKS</span>
        </div>
        <div className="border border-zinc-300 bg-zinc-200 rounded-md flex justify-center items-center p-2 hover:border-red-700 hover:bg-red-200">
          <span className=" text-sm tracking-wide">BI TOOLS & DASHBOARD</span>
        </div>
        <div className="border border-zinc-300 bg-zinc-200 rounded-md flex justify-center items-center p-2 hover:border-red-700 hover:bg-red-200">
          <span className=" text-sm tracking-wide">CRISIS MANAGEMENT</span>
        </div>
      </div>

      {/* ------------------------------------------------------------------------ */}

      <div className="flex justify-center items-center mt-20">
        {/* left--------------------- */}
        <div className="flex flex-col gap-3 p-4 ">
          <div className="flex flex-col gap-2">
            <span className=" font-bold text-xl">
              Listen to online web, Social Media and a lot more
            </span>
            <span>
              Do not miss out on any conversation anywhere on the web. Listen to
              your <br /> customer's voice, engage with them and make them
              happier
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className=" font-bold text-xl">
              Get Market Intelligence{" "}
            </span>
            <span>
              Analyze customer data from anywhere on the web and social media.
              Get <br /> real-time market intelligence. Fine-tune your
              strategies and make valuable <br /> business decisions
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <span className=" font-bold text-xl">
              Creative Asset Library{" "}
            </span>
            <span>
              Pre-save all your content, including text and media, in the
              creative asset <br /> library. Easily pick them up for publishing
              and scheduling, giving your <br /> design and content teams the
              flexibility to plan and execute your <br /> campaigns and
              festivals.
            </span> 
          </div>
          <div className="flex flex-col gap-2">
            <span className=" font-bold text-xl">
              Competitor's/Industry benchmarking{" "}
            </span>
            <span>
              See how you are faring against your competition. Understand what
              is <br /> working for them and what is working against them.
              Understand global <br /> trends with support for over 190
              languages
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center p-4">
            <img src={trendCharts} className="w-full h-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page4;
