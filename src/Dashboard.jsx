import { useState } from "react";

export default function Dashboard() {
  const redChannel = new BroadcastChannel("red");
  const blueChannel = new BroadcastChannel("blue");
  const Roundchannel = new BroadcastChannel("Round");



  const [Round, setRound] = useState(1);

  const setRed = () => {
    const newScore = Number(document.getElementById("redInput").value);
    redChannel.postMessage(newScore);
  };

  const SetBlue = () => {
    const newScore = Number(document.getElementById("BlueInput").value);

    blueChannel.postMessage(newScore);
  };

  const chingRound = (RoundNumber) =>{

    Roundchannel.postMessage(RoundNumber);
  };
  

  return (
    <div className=" gap-4 p-6">
      <h1 className="text-2xl font-bold"> Dashboard</h1>
      <hr className=" my-5" />

      {/* Set Point */}
      <h2>Set Point</h2>
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
      {/* Rounds */}
      <hr className=" my-5" />
      <h2>Chose Rounds</h2>
      <div className=" flex flex-row gap-5 items-center justify-center mt-5">
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 1 ? "bg-blue-300" : "bg-green-200"
          }
          `}
          onClick={(e) => {
            setRound(1);
            chingRound(1);

          }}
        >
          Round 1
        </button>
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 2 ? "bg-blue-300" : "bg-green-200"
          } `}
          onClick={(e) => {
            setRound(2);
            chingRound(2);
          }}
        >
          Round 2
        </button>
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 3 ? "bg-blue-300" : "bg-green-200"
          } `}
          onClick={(e) => {
            setRound(3);
            chingRound(3);
          }}
        >
          Round 3
        </button>
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 4 ? "bg-blue-300" : "bg-green-200"
          } `}
          onClick={(e) => {
            setRound(4);
            chingRound(4);
          }}
        >
          Round 4
        </button>
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 5 ? "bg-blue-300" : "bg-green-200"
          } `}
          onClick={(e) => {
            setRound(5);
            chingRound(5);
          }}
        >
          Round 5
        </button>
      </div>
    </div>
  );
}
