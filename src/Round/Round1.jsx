import React, { useState, useEffect } from "react";
import roundsData from "../../questions.json";

export default function Round1({ RoundNumber }) {
  const [RoundChick, setRoundChick] = useState(1);
  //   true = hidden   , false block
  const [hidden, setHidedden] = useState([true, true, true, true, true, true]);

  useEffect(() => {
    if (RoundNumber === 0) {
      setRoundChick(1);
    } else {
      setRoundChick(RoundNumber);
    }
  }, [RoundNumber]);

  useEffect(() => {
    const hiddenchannel = new BroadcastChannel("hidden");

    hiddenchannel.onmessage = (event) => {
      setHidedden(event.data);
    };

    return () => {
      hiddenchannel.close();
    };
  }, []);



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
          <div className="relative h-20 rounded-xl bg-gradient-to-br from-amber-300  to-blue-200 border-2  border-amber-300  shadow-lg flex items-center justify-center">
            <span
              className={`text-4xl font-extrabold text-blue-900 text-shadow-black text-shadow-sm  ${
                hidden[0] === true ? "block" : "hidden"
              } `}
            >
              1
            </span>
            <span
              className={`text-4xl font-extrabold text-black  ${
                hidden[0] === false ? "block" : "hidden"
              } `}
            >
              {round.answers[0]} | 20
            </span>
          </div>

          <div className="relative h-20 rounded-xl bg-gradient-to-br from-amber-300 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center text-shadow-black text-shadow-sm  justify-center">
            <span
              className={`text-4xl font-extrabold text-white  ${
                hidden[1] === true ? "block" : "hidden"
              } `}
            >
              2
            </span>
            <span
              className={`text-4xl font-extrabold text-white text-shadow-black text-shadow-sm   ${
                hidden[1] === false ? "block" : "hidden"
              } `}
            >
              {round.answers[1]} | 15
            </span>
          </div>

          <div className="relative h-20 rounded-xl text-shadow-black text-shadow-sm  bg-gradient-to-br from-amber-300  to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span
              className={`text-4xl font-extrabold text-shadow-black text-shadow-sm  text-white  ${
                hidden[2] === true ? "block" : "hidden"
              } `}
            >
              3
            </span>
            <span
              className={`text-4xl font-extrabold text-shadow-black text-shadow-sm  text-white  ${
                hidden[2] === false ? "block" : "hidden"
              } `}
            >
              {round.answers[2]} | 15
            </span>
          </div>

          <div className="relative h-20 rounded-xl text-shadow-black text-shadow-sm  bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span
              className={`text-4xl font-extrabold text-shadow-black text-shadow-sm  text-white  ${
                hidden[3] === true ? "block" : "hidden"
              } `}
            >
              4
            </span>
            <span
              className={`text-4xl font-extrabold text-shadow-black text-shadow-sm  text-white  ${
                hidden[3] === false ? "block" : "hidden"
              } `}
            >
              {round.answers[3]} | 10
            </span>
          </div>

          <div className="relative h-20 rounded-xl text-shadow-black text-shadow-sm  bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span
              className={`text-4xl font-extrabold text-shadow-black text-shadow-sm  text-white  ${
                hidden[4] === true ? "block" : "hidden"
              } `}
            >
              5
            </span>
            <span
              className={`text-4xl font-extrabold text-shadow-black text-shadow-sm  text-white  ${
                hidden[4] === false ? "block" : "hidden"
              } `}
            >
              {round.answers[4]} | 10
            </span>
          </div>

          <div className="relative h-20 rounded-xl text-shadow-black text-shadow-sm  bg-gradient-to-br from-blue-500 to-blue-600 border-2  border-amber-300 shadow-lg flex items-center justify-center">
            <span
              className={`text-4xl font-extrabold text-white  ${
                hidden[5] === true ? "block" : "hidden"
              } `}
            >
              6
            </span>
            <span
              className={`text-4xl font-extrabold text-shadow-black text-shadow-sm  text-white  ${
                hidden[5] === false ? "block" : "hidden"
              } `}
            >
              {round.answers[5]} | 10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
