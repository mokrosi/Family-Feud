import React from 'react'
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <div className="bg-gray-400 h-screen max-w-full flex flex-col justify-center items-center gap-3 ">
        <div>{" "}خمنها صح</div>
        <div className="flex flex-row gap-3 ">
          <button className="bg-blue-200 rounded-3xl cursor-pointer h-10 w-20">
            <Link target="_blank" to={"./Dashboard"}>
              Dashbord
            </Link>
          </button>
          <button className="bg-blue-200 rounded-3xl cursor-pointer h-10 w-20">
            <Link target="_blank" to={"./Display"}>
              Display
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default MainPage