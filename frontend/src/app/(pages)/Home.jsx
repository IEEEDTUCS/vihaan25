import React from "react";
import Image from "next/image";
import Logo from "../assets/Logo.svg";
import BgVector from "../assets/BgVectors.svg";
import BigCircle from "../assets/BigCircle.svg";
import Clock from "../assets/Clock.svg";

const HomePage = () => {
   return (
      <>
         <div className="relative flex min-h-screen flex-col items-center justify-start overflow-y-scroll">
            {/* Rotating Background Vectors */}
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Large Circle */}
               <Image
                  src={BigCircle}
                  alt="Big Circle"
                  className="absolute w-[1100px]"
               />
               {/* Small Rotating Vector */}
               <Image
                  src={BgVector}
                  alt="BgVector"
                  className="absolute w-[900px] animate-[spin_20s_linear_infinite]"
               />
            </div>

            {/* Centered Clock */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
               <Image
                  src={Clock}
                  alt="Clock"
                  className="w-[1000px]" // Adjust size as needed
               />
            </div>

            {/* Vihaan Logo (Centered on Top) */}
            <Image
               src={Logo}
               alt="Vihaan Logo"
               width={100}
               height={100}
               className="relative z-10 mt-2"
            />
            <div className="text-content font-extrabold relative top-80 flex items-center  flex-col">
              <h1 className="text-9xl">VIHAAN 8.0</h1>
              <h2 className="text-white text-3xl ">AWAITS YOU</h2>
              <h2 className="text-white mt-8 text-sm">REGISTER AT</h2>
              <button className="bg-[#8f7e7742] tracking-tighter font-normal text-2xl mt-1 px-6 py-2 hover:bg-[#8f7e776b] border-2 border-[#8f7e77]">DEVFOLIO LINK</button>
            </div>
         </div>
      </>
   );
};

export default HomePage;
