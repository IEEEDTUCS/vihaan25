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

            <div className="flex flex-wrap justify-start relative bordernew bg-contain bg-no-repeat bg-center w-[80%] h-[100%] pl-5 z-10">
                <div className="bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat w-full h-[50%] flex items-center justify-center mt-4">
                <p className="text-xl font-bold absolute left-100 max-[920px]:relative max-[920px]:left-20 border border-amber-950 text-[#4e3124] font-khinterference tracking-normal text-center max-w-[10%] truncate">
                Team-Crazy-as-Fuck(Winner-1)
                </p>
                </div>
                <div className="bg-[url('/Quiz/2nd-pos.svg')] bg-contain bg-no-repeat w-[35%] h-[50%] max-[920px]:w-[55%] max-[1200px]:w-[45%] max-[920px]:h-[35%] flex items-center justify-center mt-4">
                <p className="text-xl font-bold absolute bottom-28 border text-[#4e3124] border-amber-950 font-khinterference tracking-tight text-center max-w-[10%] truncate">
                Team-Crazy-as-Fuck(Winner-2)
                </p>
                </div>
                <div className="bg-[url('/Quiz/3rd-pos.svg')] bg-contain bg-no-repeat w-[30%] h-[50%] max-[920px]:w-[45%] max-[1200px]:w-[40%] max-[920px]:h-[35%] flex items-center justify-center mt-4">
                <p className="text-xl font-bold absolute bottom-28 text-[#4e3124] border border-amber-950 font-khinterference tracking-tighter text-center max-w-[10%] truncate">
                Team-Crazy-as-Fuck(Winner-3)
                </p>
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
      <div className="text-[#4e3124] font-khinterference tracking-normal text-base font-bold ml-23 max-w-[15%] truncate">
        Winnddddddddddddddddddddddddddddddddddddder 1
      </div> 
    </div>

    <div className="relative bg-[url('/Quiz/2nd-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
      <div className="text-[#4e3124] font-khinterference tracking-tight text-base font-bold max-w-[15%] truncate">
        Winnffffffffffffffffffffffffffffffffffffffffffer 2
      </div>
    </div>

    <div className="relative bg-[url('/Quiz/3rd-pos.svg')] bg-contain bg-no-repeat bg-center h-40 w-full flex items-center justify-center">
      <div className="text-[#4e3124] font-khinterference tracking-tight text-base font-bold max-w-[15%] truncate">
        Winner 3
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
