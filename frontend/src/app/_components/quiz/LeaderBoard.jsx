"use client";
import React from "react";
import "@/app/globals.css";

export default function LeaderBoard({rank1, rank2, rank3}) {
  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col">
     
      <div className="w-full h-full flex flex-col justify-evenly items-center max-[650px]:hidden">
        <img
          src="/Quiz/Stopwatch.svg"
          alt=""
          className="absolute w-[90%] h-[100%] object-contain z-11 -top-5 -right-90 max-[1300px]:w-[90%] max-[1020px]:hidden max-[1300px]:h-[80%] max-[650px]:right-auto max-[650px]:left-0"
        />

        <div className="flex flex-col items-center py-10 z-10">
          <img
            src="/Quiz/results.svg"
            alt="Quiz Results"
            className="w-auto h-auto mb-4"
          />
          <h1 className="text-7xl tracking-widest text-[#9a857b] font-khinterference text-center">
            LEADERBOARD
          </h1>
        </div>

        {/* isse truncate ko use krna vrna text will overflow from the images and thia way people will also see the rankings */}
        {/* add dynamic winners ke naam */}

            <div className="flex flex-wrap justify-start relative bordernew bg-contain bg-no-repeat bg-center w-[80%] h-[100%] pl-5 z-10" name="leaderboard">
                <div className="bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat w-full h-[50%]  mt-4">
              <div className="flex flex-row w-full justify-center items-center">
                <p className="text-3xl font-bold text-[#4e3124] font-khinterference tracking-tighter text-center max-w-[20%] mt-36 -ml-100">
                { rank1 ? rank1.name : "Waiting for player..." }
                </p>
                </div>
                </div>
                <div className="bg-[url('/Quiz/2nd-pos.svg')] bg-contain bg-no-repeat w-[35%] h-[50%] max-[920px]:w-[55%] max-[1200px]:w-[45%] max-[920px]:h-[35%] mt-4">
            <div className="flex flex-row w-full justify-center items-center">
                <p className="text-lg font-bold text-[#4e3124] font-khinterference tracking-tighter text-center max-w-[40%] mt-28">
                { rank2 ? rank2.name : "Waiting for player..." }
                </p>
                </div>
                </div>
                <div className="bg-[url('/Quiz/3rd-pos.svg')] bg-contain bg-no-repeat w-[30%] h-[50%] max-[920px]:w-[45%] max-[1200px]:w-[40%] max-[920px]:h-[35%] mt-4">
            <div className="flex flex-row w-full justify-center items-center">
                <p className="text-lg font-bold text-[#4e3124] font-khinterference tracking-tighter text-center max-w-[40%] mt-26 ml-4">
                { rank3 ? rank3.name : "Waiting for player..." }
                </p>
                </div>
                </div>
            </div>
              </div>

             
              <div className="hidden max-[650px]:flex flex-col items-center justify-start w-full h-full p-4">
            
            <div className="flex flex-col items-center py-4 z-10">
              <img
                src="/Quiz/results.svg"
                alt="Quiz Results"
                className="w-auto h-auto mb-2"
              />
              <h1 className="text-4xl tracking-widest text-[#9a857b] font-khinterference text-center">
                TOP CONVICTS
              </h1>
            </div>

        {/* add dynamic winners ke naam */}
       
        <div className="p-[3px] rounded-xl border-12 border-[#916d4c57] bg-gradient-to-r from-[#c69f7000] via-[#b88a4a1d] to-[#a97b3a1a]">
  <div className=" rounded-xl p-4 space-y-4">
    <div className="relative bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
      <p className="text-[#4e3124] text-xs font-khinterference tracking-normal text-base font-bold ml-23 max-w-[35%] truncate mr-4">
                { rank1 ? rank1.name : "Waiting..." }
      </p> 
    </div>

    <div className="relative bg-[url('/Quiz/2nd-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
      <p className="text-[#4e3124] text-xs font-khinterference tracking-tight text-base font-bold max-w-[30%] truncate mr-5">
                { rank2 ? rank2.name : "Waiting..." }
      </p>
    </div>

    <div className="relative bg-[url('/Quiz/3rd-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
      <p className="text-[#4e3124] text-xs font-khinterference tracking-tight text-base font-bold max-w-[30%] truncate mr-3">
                { rank3 ? rank3.name : "Waiting..." }
      </p>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
