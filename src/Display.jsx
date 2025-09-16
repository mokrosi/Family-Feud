import { useState, useEffect } from "react";
import Round1 from "./Round/Round1";

export default function Display() {
  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);
  const [round, setRound] = useState(0);


  useEffect(() => {
    const redChannel = new BroadcastChannel("red");
    const blueChannel = new BroadcastChannel("blue");
    const Roundchannel = new BroadcastChannel("Round");

    redChannel.onmessage = (event) => setRedScore(event.data);
    blueChannel.onmessage = (event) => setBlueScore(event.data);
    Roundchannel.onmessage = (event) => setRound(event.data);

    return () => {
      redChannel.close();
      blueChannel.close();
      Roundchannel.close();
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-cyan-900 p-6 text-gray-900  ">
        <div className="flex gap-x-80 justify-center  bg-gradient-to-r from-red-500 to-blue-500 h-20 items-center   ">
          <span className="text-white text-4xl font-bold w-30">{redScore}</span>
          <span className="text-5xl text-white font-extrabold text-shadow-black text-shadow-lg">
            {" "}
            خمنها صح
          </span>

          <span className="text-white text-4xl font-bold w-30 ">
            {blueScore}
          </span>
        </div>
        <div className={`${round != 0 ? "block" : "hidden"}  `}>
          <Round1 RoundNumber={round} />
        </div>
      </div>
    </>
  );
}
