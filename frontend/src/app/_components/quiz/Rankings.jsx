import React from 'react';
import Leaderboard from './LeaderBoard';
import Button from "@/app/_components/ui/Button";
import { Link } from "react-scroll";

const Rankings = ({ loading, data }) => {
  const today = new Date();

  const day = today.getDate().toString().padStart(2, '0');
  const month = (today.getMonth() + 1).toString().padStart(2, '0');
  const year = today.getFullYear().toString().slice(-2);

  const formattedDate = `${day}-${month}-${year}`;

  return (
    loading ? (
      <p className="font-orbitron text-2xl">Fetching Leaderboard...</p>
      ) : (
        <>
        <div className='mt-10' name="leaderboard"> 
    <Leaderboard rank1={data[0]} rank2={data[1]} rank3={data[2]} />
    </div>
    <div className='flex justify-center items-center mt-50 '>
    <img src="/Quiz/Rankings/HEading.svg" alt=""/>
    </div>
    <div className="p-4 bg-gradient-to-br from-[#E0C9A6] via-[#e8dcc6] to-[#b29164] shadow-inner m-[20%] mb-0 mt-[5%] max-[650px]:m-[8%] min-h-screen rounded-2xl border-4 border-[#8d6e31] outline-dashed border-dotted opacity-80 relative">
      
      <div className="absolute top-4 left-4 w-20 h-20 rounded-md border-2 flex items-center justify-center text-xs">
        <img src="/svg/Logo.svg" alt="" />
      </div>

      {/* add dynamic date ya change krdi daily abhimanyu bhaiya */}
      <p className="absolute top-14 right-40 -rotate-12 max-[500px]:right-5 font-khinterference text-[#9a272774] text-2xl font-bold">
        {formattedDate}
      </p>

      <div className="absolute -top-8 -right-1 text-[#9a272774]  max-[500px]:w-60 w-70 h-30">
        <img src="/Quiz/Rankings/Tube.svg" alt="" />
      </div>

     
      <div className="overflow-x-auto mt-24">
        <table className="table-auto w-full border-[#82270037] font-orbitron tracking-normal border-t-8 text-center">
          <thead>
            <tr className="text-black text-xl ">
              <th className=" py-2 text-left border-[#82270034] border-r-8">RANK</th>
              <th className="px-4 py-2">NAME</th>
              <th className="px-4 py-2">EMAIL</th>
              <th className="px-4 py-2">SCORE</th>
            </tr>
          </thead>
          <tbody>
            {/* add dynamic data logo ka */}
            {data.map((row, idx) => (
              <tr key={idx} className="text-black text-lg ">
                <td className="px-4 py-1 text-left border-[#82270048] border-r-8">{row.rank}</td>
                <td className="px-4 py-1">{row.name}</td>
                <td className="px-4 py-1">{row.email}</td>
                <td className="px-4 py-1">{row.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      
    </div>
      <div className='absolute mt-50 w-full flex justify-center z-109 '>
        <Link  to="quiz" smooth duration={1500} offset={-100}><Button href="" children={"Back To Quiz"}></Button></Link>
      </div>
    <div className='absolute opacity-80 w-screen h-[50%] -z-10 overflow-y-hidden bg-[url(/Quiz/Rankings/buttonBack.svg)] bg-contain bg-bottom bg-no-repeat'>
        <img src="/Quiz/Rankings/Globe.svg" alt="" />
    </div>      
    </>
      )
  );
};

export default Rankings;
