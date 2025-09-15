import { useState, useEffect } from "react";
import Round1 from "./Round/Round1";

const channel = new BroadcastChannel("feud");

const redPoint = new BroadcastChannel("red");
const bluePoint = new BroadcastChannel("blue");



export default function Display() {



  const [redScore, setRedScore] = useState(0);
  const [blueScore, setBlueScore] = useState(0);

  useEffect(() => {
    const redChannel = new BroadcastChannel("red");
    const blueChannel = new BroadcastChannel("blue");

    redChannel.onmessage = (event) => setRedScore(event.data);
    blueChannel.onmessage = (event) => setBlueScore(event.data);

    return () => {
      redChannel.close();
      blueChannel.close();
    };
  }, []);


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-950 to-cyan-900 p-6 text-gray-900  ">
        <div className="flex gap-x-80 justify-center    ">
          <span className="text-red-500 text-3xl font-bold">{redScore}</span>
          <span className="text-3xl"> خمنها صح</span>
          <span className="text-blue-500 text-3xl font-bold ">{blueScore}</span>
        </div>
        <div className="">
          <Round1 />
        </div>
      </div>
    </>
  );
}
