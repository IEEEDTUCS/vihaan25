"use client";
import React from "react";
import "@/app/globals.css";

export default function LeaderBoard() {
  return (
    <div className="w-full h-screen relative overflow-hidden flex flex-col">
     
      <div className="w-full h-full flex flex-col justify-evenly items-center max-[650px]:hidden">
        <img
          src="/Quiz/Stopwatch.svg"
          alt=""
          className="absolute w-[90%] h-[100%] object-contain z-11 -top-5 -right-90 max-[1300px]:w-[90%] max-[920px]:hidden max-[1300px]:h-[80%] max-[650px]:right-auto max-[650px]:left-0"
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

        <div className="flex flex-wrap justify-start bordernew bg-contain bg-no-repeat bg-center w-[80%] h-[100%] pl-5 z-10">
          <div className="bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat w-full h-[50%] flex items-center justify-center mt-4">
            <p className="text-xl font-bold text-white relative -left-[15%]">Winner 1</p>
          </div>
          <div className="bg-[url('/Quiz/2nd-pos.svg')] bg-contain bg-no-repeat w-[35%] h-[50%] max-[920px]:w-[55%] max-[1200px]:w-[45%] max-[920px]:h-[35%] flex items-center justify-center mt-4">
            <p className="text-xl font-bold text-white">Winner 2</p>
          </div>
          <div className="bg-[url('/Quiz/3rd-pos.svg')] bg-contain bg-no-repeat w-[30%] h-[50%] max-[920px]:w-[45%] max-[1200px]:w-[40%] max-[920px]:h-[35%] flex items-center justify-center mt-4">
            <p className="text-xl font-bold text-white">Winner 3</p>
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

       
         <div className="border-[15px] border-[url('/Quiz/wood-border.png')] bg-[#121212] w-full h-auto rounded-xl p-4 space-y-4">
                <div className="relative bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
                    <div className="text-white text-base font-bold">Winner 1</div>
                </div>

            
                <div className="relative bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
                    <div className="text-white text-base font-bold">Winner 2</div>
                </div>

             
                <div className="relative bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
                    <div className="text-white text-base font-bold">Winner 3</div>
                </div>
            </div>
      </div>
    </div>
  );
}
