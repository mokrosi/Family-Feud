import { useState } from "react";

export default function Dashboard() {
  const redChannel = new BroadcastChannel("red");
  const blueChannel = new BroadcastChannel("blue");

//   const [redScore, setRedScore] = useState(0);
//   const [blueScore, setBlueScore] = useState(0);

  const setRed = () => {
    const newScore = Number(document.getElementById("redInput").value);
    redChannel.postMessage(newScore);
  };

  const SetBlue = () => {
    const newScore = Number(document.getElementById("BlueInput").value);

    blueChannel.postMessage(newScore);
  };

  return (
    <div className=" gap-4 p-6">
      <h1 className="text-2xl font-bold"> Dashboard</h1>
      {/* Set Scour */}
      <div className="flex flex-row gap-5">
        <div className="flex gap-4  items-center ">
          <input id="redInput" type="number" className="h-10 w-40 bg-red-200" />
          <button
            onClick={setRed}
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow"
          >
            Set Red Point
          </button>
        </div>

        <div className="flex gap-4  items-center ">
          <input
            id="BlueInput"
            type="number"
            className="h-10 w-40 bg-blue-200"
          />

          <button
            onClick={SetBlue}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow"
          >
            Set Blue Point
          </button>
        </div>
      </div>
    </div>
  );
}
