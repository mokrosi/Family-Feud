import { useState } from "react";
import RoundDashpord from "./Round/RoundDashpord";

export default function Dashboard() {
  const redChannel = new BroadcastChannel("red");
  const blueChannel = new BroadcastChannel("blue");
  const Roundchannel = new BroadcastChannel("Round");
  const hiddenchannel = new BroadcastChannel("hidden");
  const xChannel = new BroadcastChannel("xChannel");
  const xxChannel = new BroadcastChannel("xxChannel");
  const xxxChannel = new BroadcastChannel("xxxChannel");

  //   red , blue
  const [point, setPoint] = useState([0, 0]);

  //   true = hidden   , false block
  const [hidden, setHidedden] = useState([true, true, true, true, true, true]);

  const [Round, setRound] = useState(1);

  const setRed = () => {
    const newScore = Number(document.getElementById("redInput").value);
    setPoint([newScore, point[1]]);
    redChannel.postMessage(newScore);
  };

  const SetBlue = () => {
    const newScore = Number(document.getElementById("BlueInput").value);
    setPoint([point[0], newScore]);
    blueChannel.postMessage(newScore);
  };

  const chingRound = (RoundNumber) => {
    Roundchannel.postMessage(RoundNumber);
  };

  const sendX = () => {
    playSoundX();
    xChannel.postMessage("showX");
  };

  const sendXX = () => {
    playSoundX();
    xxChannel.postMessage("showXX");
  };

  const sendXXX = () => {
    playSoundX();
    xxxChannel.postMessage("showXXX");
  };

  const playSoundX = () => {
    const audio = new Audio("../Sound/FFD-XE.mp3");
    audio.play();
  };

  const playSoundW = () => {
    const audio = new Audio("../Sound/FFD-WE.mp3");
    audio.play();
  };

  return (
    <div className=" gap-4 p-6">
      <h1 className="text-2xl font-bold"> Dashboard</h1>

      {/* Rounds */}
      <hr className=" my-5" />
      <h2>Chose Rounds</h2>
      <div className=" flex flex-row gap-5 items-center justify-center mt-5">
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 0 ? "bg-blue-300" : "bg-green-200"
          }
          `}
          onClick={(e) => {
            setRound(0);
            chingRound(0);
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
          }}
        >
          Home
        </button>
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 1 ? "bg-blue-300" : "bg-green-200"
          }
          `}
          onClick={(e) => {
            setRound(1);
            chingRound(1);
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
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
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
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
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
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
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
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
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
          }}
        >
          Round 5
        </button>
        <button
          className={` py-1 px-2 hover:bg-green-300 rounded-sm ${
            Round == 6 ? "bg-blue-300" : "bg-green-200"
          } `}
          onClick={(e) => {
            setRound(6);
            chingRound(6);
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
          }}
        >
          Round 5
        </button>
      </div>

      {/* Set Point */}
      <hr className=" my-5" />

      <h2>Set Point</h2>
      <div className="flex flex-row gap-5">
        <div className="flex gap-4  items-center ">
          <span className="text-red-500 text-2xl">{point[0]}</span>
          <input id="redInput" type="number" className="h-10 w-40 bg-red-200" />
          <button
            onClick={setRed}
            className="bg-red-600 text-white px-6 py-3 rounded-lg shadow"
          >
            Set Red Point
          </button>
        </div>

        <div className="flex gap-4  items-center ">
          <span className="text-blue-500 text-2xl">{point[1]}</span>
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

      <hr className=" my-5" />
      {/* Q&A */}
      <div>
        <RoundDashpord RoundNumber={Round} />
      </div>
      {/* hide button */}
      <div className="flex gap-5 items-center justify-center mt-5">
        <button
          className="w-20 h-10 rounded-2xl   bg-green-300"
          onDoubleClick={(e) => {
            const newHidden = [true, true, true, true, true, true];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
          }}
        >
          hide all
        </button>
        <button
          className={`w-10 h-10 rounded-2xl  text-2xl ${
            hidden[0] == true ? "bg-red-300" : "bg-blue-300"
          }`}
          onDoubleClick={(e) => {
            const newHidden = [
              false,
              hidden[1],
              hidden[2],
              hidden[3],
              hidden[4],
              hidden[5],
            ];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
            playSoundW();
          }}
        >
          1
        </button>
        <button
          className={`w-10 h-10 rounded-2xl  text-2xl ${
            hidden[1] == true ? "bg-red-300" : "bg-blue-300"
          }`}
          onDoubleClick={(e) => {
            const newHidden = [
              hidden[0],
              false,
              hidden[2],
              hidden[3],
              hidden[4],
              hidden[5],
              
            ];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
            playSoundW();
            
          }}
        >
          2
        </button>
        <button
          className={`w-10 h-10 rounded-2xl  text-2xl ${
            hidden[2] == true ? "bg-red-300" : "bg-blue-300"
          }`}
          onDoubleClick={(e) => {
            const newHidden = [
              hidden[0],
              hidden[1],
              false,
              hidden[3],
              hidden[4],
              hidden[5],
            ];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
            playSoundW();
          }}
        >
          3
        </button>
        <button
          className={`w-10 h-10 rounded-2xl  text-2xl ${
            hidden[3] == true ? "bg-red-300" : "bg-blue-300"
          }`}
          onDoubleClick={(e) => {
            const newHidden = [
              hidden[0],
              hidden[1],
              hidden[2],
              false,
              hidden[4],
              hidden[5],
            ];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
            playSoundW();
          }}
        >
          4
        </button>
        <button
          className={`w-10 h-10 rounded-2xl  text-2xl ${
            hidden[4] == true ? "bg-red-300" : "bg-blue-300"
          }`}
          onDoubleClick={(e) => {
            const newHidden = [
              hidden[0],
              hidden[1],
              hidden[2],
              hidden[3],
              false,
              hidden[5],
            ];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
            playSoundW();
          }}
        >
          5
        </button>
        <button
          className={`w-10 h-10 rounded-2xl  text-2xl ${
            hidden[5] == true ? "bg-red-300" : "bg-blue-300"
          }`}
          onDoubleClick={(e) => {
            const newHidden = [
              hidden[0],
              hidden[1],
              hidden[2],
              hidden[3],
              hidden[4],
              false,
            ];
            setHidedden(newHidden);
            hiddenchannel.postMessage(newHidden);
            playSoundW();
          }}
        >
          6
        </button>
      </div>
      {/* X X X */}
      <hr className=" my-5" />
      <div className=" flex gap-5 items-center justify-center">
        <button
          className="w-20 h-10 rounded-2xl  text-3xl font-bold hover:bg-amber-200  border-red-500 border-2"
          onClick={sendX}
        >
          X
        </button>
        <button
          onClick={sendXX}
          className="w-20 h-10 rounded-2xl  text-3xl font-bold hover:bg-amber-200 border-red-500 border-2"
        >
          XX
        </button>
        <button
          onClick={sendXXX}
          className="w-20 h-10 rounded-2xl  text-3xl font-bold hover:bg-amber-200  border-red-500 border-2"
        >
          XXX
        </button>
      </div>
    </div>
  );
}
