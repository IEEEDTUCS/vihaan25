import React from 'react';
import Leaderboard from '@/app/_components/Quiz/LeaderBoard';
import Button from "@/app/_components/ui/Button";

const Rankings = () => {
  const rows = Array.from({ length: 30 }, (_, i) => ({
    sno: 1,
    name: 'RUPIN',
    points: '14000',
  }));

  return (
    <>
    <div className='mt-50'> 
    <Leaderboard />
    </div>
    <div className='flex justify-center items-center mt-50 '>
    <img src="/Quiz/Rankings/HEading.svg" alt=""/>
    </div>
    <div className="p-4 bg-gradient-to-br from-[#8b74448b] via-[#e8dcc6] to-[#b29164] shadow-inner m-[20%] mb-0 mt-[5%] max-[650px]:m-[8%] min-h-screen rounded-2xl border-4 border-[#8d6e31] outline-dashed border-dotted opacity-80 relative">
      
      <div className="absolute top-4 left-4 w-20 h-20 rounded-md border-2 flex items-center justify-center text-xs">
        <img src="/svg/Logo.svg" alt="" />
      </div>

      
      <div className="absolute top-14 right-40 -rotate-12 max-[500px]:right-5 font-khinterference text-[#9a272774] text-2xl font-bold">
        17-4-25
      </div>

      <div className="absolute -top-8 -right-1 text-[#9a272774]  max-[500px]:w-60 w-70 h-30">
        <img src="/Quiz/Rankings/Tube.svg" alt="" />
      </div>

     
      <div className="overflow-x-auto mt-24">
        <table className="table-auto w-full border-[#82270037] font-orbitron tracking-normal border-t-8 text-center">
          <thead>
            <tr className="text-black text-xl ">
              <th className=" py-2 text-left border-[#82270034] border-r-8">S.NO</th>
              <th className="px-4 py-2">NAME</th>
              <th className="px-4 py-2">POINTS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="text-black text-lg ">
                <td className="px-4 py-1 text-left border-[#82270048] border-r-8">{row.sno}</td>
                <td className="px-4 py-1">{row.name}</td>
                <td className="px-4 py-1">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className='absolute mt-50 w-[95%] flex justify-center z-109 '>
     
        <Button href="https://vihaan.ieeedtu.in/Quizz" children={"Back To Quiz"}></Button>
    
      </div>
      
    </div>
    <div className='absolute opacity-80 w-screen h-[50%] -z-10 overflow-y-hidden bg-[url(/Quiz/Rankings/buttonBack.svg)] bg-contain bg-bottom bg-no-repeat'>
        <img src="/Quiz/Rankings/Globe.svg" alt="" />
    </div>      
      
      </>
  );
};

export default Rankings;
