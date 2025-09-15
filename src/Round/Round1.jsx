import React, { useState, useEffect } from "react";
import roundsData from "../../questions.json"; 

export default function Round1({ RoundNumber }) {
  const [RoundChick, setRoundChick] = useState(1);

  useEffect(() => {
    if (RoundNumber === 0) {
      setRoundChick(1);
    } else {
      setRoundChick(RoundNumber);
    }
  }, [RoundNumber]); 

  const round = roundsData.rounds[RoundChick - 1];

  return (
    <div className="relative flex h-full items-center justify-center mt-4  overflow-hidden">
      {/* Optional: Subtle Grid Background */}

      <div className=" w-full ">
        <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-white drop-shadow-sm">
          {" "}
          الجولة <span className="font-bold text-4xl"> {RoundNumber}</span>
        </h1>

        <h1 className="mb-10 text-right text-5xl font-extrabold tracking-tight text-amber-300 drop-shadow-sm">
          {round.question} ✦
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300  shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">١</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٢</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٣</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٤</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٥</span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className="text-4xl font-extrabold text-white">٦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
