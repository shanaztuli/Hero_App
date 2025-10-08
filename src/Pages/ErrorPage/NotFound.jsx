import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/App-Error.png";

const NotFound = () => {
  return (
    <div className="max-w-[1250px] mx auto ">
      <img className="block mx-auto" src={img} alt="" />

      <h2 className="text-3xl font-bold mb-2 text-center">
        Oops, page not found!{" "}
      </h2>
      <p className="text-center">
        The page you are looking for is not available.
      </p>
      <div className="flex justify-center">
        <Link to="/apps">
          {" "}
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">
            {" "}
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
