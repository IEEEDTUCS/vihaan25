import React from 'react';

const Rankings = () => {
  return (
    <div className="bg-[url('/Quiz/Rankings/ranking.svg')] bg-contain bg-no-repeat bg-center w-full min-h-screen flex items-center justify-center px-4 py-10">
      <div className="w-full sm:w-[90%] md:w-[70%] xl:w-[45%] rounded-2xl border border-[#e0cba4]/40 bg-[#f5f5dc00] relative overflow-x-auto shadow-md">
        <table className="min-w-full table-auto text-black font-medium text-sm sm:text-base">
          <thead className="bg-[#eae0c800] text-lg">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left">S.No.</th>
              <th className="px-4 sm:px-6 py-3 text-left">Team Name</th>
              <th className="px-4 sm:px-6 py-3 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(20)].map((_, i) => (
              <tr
                key={i}
                className={`${i % 2 === 0 ? 'bg-[#fdf5e600]' : 'bg-[#fffaf000]'}`}
              >
                <td className="px-4 sm:px-6 py-2 sm:py-3">{i + 1}</td>
                <td className="px-4 sm:px-6 py-2 sm:py-3">Team {i + 1}</td>
                <td className="px-4 sm:px-6 py-2 sm:py-3">{Math.floor(Math.random() * 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rankings;
