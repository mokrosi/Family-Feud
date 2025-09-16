import { useState, useEffect } from "react";
import Round1 from "./Round/Round1";

export default function Display() {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [round, setRound] = useState(0);
  const [showX, setShowX] = useState(false);
    const [showXX, setShowXX] = useState(false);

      const [showXXX, setShowXXX] = useState(false);


  useEffect(() => {
    const redChannel = new BroadcastChannel("red");
    const blueChannel = new BroadcastChannel("blue");
    const Roundchannel = new BroadcastChannel("Round");
    const xChannel = new BroadcastChannel("xChannel");
    const xxChannel = new BroadcastChannel("xxChannel");
    const xxxChannel = new BroadcastChannel("xxxChannel");

    redChannel.onmessage = (event) => setRedScore(event.data);
    blueChannel.onmessage = (event) => setBlueScore(event.data);
    Roundchannel.onmessage = (event) => setRound(event.data);

    xChannel.onmessage = (event) => {
      if (event.data === "showX") {
        setShowX(true);
        setTimeout(() => setShowX(false), 2000);
      }
    };

    xxChannel.onmessage = (event) => {
      if (event.data === "showXX") {
        setShowXX(true);
        setTimeout(() => setShowXX(false), 2000); 
      }
    };

    xxxChannel.onmessage = (event) => {
      if (event.data === "showXXX") {
        setShowXXX(true);
        setTimeout(() => setShowXXX(false), 2000); 
      }
    };

    return () => {
      redChannel.close();
      blueChannel.close();
      Roundchannel.close();
      xChannel.close();
      xxChannel.close();
      xxxChannel.close();
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-cyan-900 p-6 text-gray-900  ">
        <div className="flex gap-x-80 justify-between text-center  bg-gradient-to-r from-red-500 to-blue-500 h-20 items-center   ">
          <span className="text-white text-5xl font-bold w-30 text-shadow-black text-shadow-lg">
            {redScore}
          </span>
          <span className="text-5xl  text-white font-extrabold text-shadow-black text-shadow-lg">
            {" "}
            خمنها صح
          </span>
          <span className="text-white text-5xl font-bold w-30 text-shadow-black text-shadow-lg ">
            {blueScore}
          </span>
        </div>
        <div className={`${round != 0 ? "block" : "hidden"}  `}>
          <Round1 RoundNumber={round} />
        </div>

        {showX && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <img
              src="/1.png" // ضع صورة الـ ❌ في مجلد public
              alt="X"
              className="w-100 h-100 animate-pulse "
            />
          </div>
        )}

        {/*  */}

        {showXX && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <img
              src="/2.png" // ضع صورة الـ ❌ في مجلد public
              alt="X"
              className="w-100 h-100 animate-pulse "
            />
          </div>
        )}

        {/*  */}

        {showXXX && (
          <div className="absolute inset-0 flex items-center justify-center ">
            <img
              src="/3.png" // ضع صورة الـ ❌ في مجلد public
              alt="X"
              className="w-100 h-100 animate-pulse "
            />
          </div>
        )}
      </div>
    </>
  );
}
