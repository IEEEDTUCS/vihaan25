"use client";
import React from "react";
import "@/app/globals.css";

export default function IEEE() {
return (
    <>
        <div className="w-full h-screen flex flex-col justify-evenly max-[680px]:justify-start items-center relative">

            <img
                src="/Quiz/Stopwatch.svg"
                alt=""
                className="absolute w-[90%] h-[100%] object-contain z-11 -top-5 -right-120 max-[1280px]:hidden"
            />

            <div className="flex flex-col items-center py-10 z-10 ">
                <img
                    src="/Quiz/results.svg"
                    alt="Quiz Results"
                    className="w-auto h-auto mb-4"
                />
                <h1 className="text-7xl tracking-widest text-[#9a857b] font-khinterference text-center max-[600px]:text-5xl max-[600px]:font-bold max-[600px]:tracking-normal">
                    LEADERBOARD
                </h1>
            </div>

            <div className="flex flex-wrap justify-start bordernew bg-contain bg-no-repeat bg-center w-[80%] h-[100%] pl-5 z-10 max-[1280px]:border-[10px] max-[1280px]:border-gradient-to-r max-[1280px]:from-[#7c4f1d] max-[1280px]:to-[#7c4f1d] max-[1280px]:h-[50%] max-[1280px]:p-4 max-[1280px]:self-center max-[580px]:h-[40%]">
                <div className="bg-[url('/Quiz/1st-pos.svg')] bg-contain bg-no-repeat w-full h-[50%] max-[1280px]:w-full flex items-center justify-center border border-[#FFD700] mt-4">
                    <p className="text-xl font-bold text-white relative -left-[15%] ">Winner 1</p>
                </div>
                <div className="bg-[url('/Quiz/2nd-pos.svg')] bg-contain bg-no-repeat w-[35%] h-[50%] max-[1280px]:w-[50%] flex items-center justify-center border border-[#C0C0C0] mt-4">
                    <p className="text-xl font-bold text-white">Winner 2</p>
                </div>
                <div className="bg-[url('/Quiz/3rd-pos.svg')] bg-contain bg-no-repeat w-[30%] h-[50%] max-[1280px]:w-[49%] flex items-center justify-center border border-[#CD7F32] mt-4">
                    <p className="text-xl font-bold text-white">Winner 3</p> 
                    {/* is funnctionality ko bs 1280px tk rkho fir use internet se components to write data on them */}
                </div>
                
            </div>
        </div>
    </>
);
}
