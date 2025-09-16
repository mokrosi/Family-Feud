import React, { useState, useEffect } from "react";
import roundsData from "../../questions.json";

const RoundDashpord = ({ RoundNumber }) => {
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
        <h1 className="mb-10 text-center text-3xl font-extrabold tracking-tight text-black drop-shadow-sm">
          {" "}
          الجولة <span className="font-bold text-4xl"> {RoundNumber}</span>
        </h1>

        <h1 className="mb-10 text-right text-2xl font-extrabold tracking-tight text-black drop-shadow-sm">
          {round.question} ✦
        </h1>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300  shadow-lg flex items-center justify-center">
            <span className={`text-4xl font-extrabold text-white `}>1-</span>
            <span className={`text-4xl font-extrabold text-white `}>
              {round.answers[0]}
            </span>
          </div>

          <div className="relative h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className={`text-4xl font-extrabold text-white `}>2-</span>
            <span className={`text-4xl font-extrabold text-white `}>
              {round.answers[1]}
            </span>
          </div>

          <div className="relative h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className={`text-4xl font-extrabold text-white `}>3-</span>
            <span className={`text-4xl font-extrabold text-white `}>
              {round.answers[2]}
            </span>
          </div>

          <div className="relative h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className={`text-4xl font-extrabold text-white `}>4-</span>
            <span className={`text-4xl font-extrabold text-white `}>
              {round.answers[3]}
            </span>
          </div>

          <div className="relative h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className={`text-4xl font-extrabold text-white `}>5-</span>
            <span className={`text-4xl font-extrabold text-white `}>
              {round.answers[4]}
            </span>
          </div>

          <div className="relative h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span className={`text-4xl font-extrabold text-white `}>6-</span>
            <span className={`text-4xl font-extrabold text-white `}>
              {round.answers[5]}
            </span>
          </div>
        </div>
      </div>
    </div>
  );};

export default RoundDashpord;
