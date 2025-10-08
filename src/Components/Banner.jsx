import React from "react";
import play from "../assets/fi_16076057.png";
import apple from "../assets/fi_5977575.png";
import hero from "../assets/hero.png";
const Banner = () => {
  return (
    <div className="py-4 ">
      <div className="max-w-[1250px] mx-auto">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">
              We Build
              <span className="text-blue-600 ml-2">Productive</span> Apps
            </h1>
            <p className="py-6 text-gray-500">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <a
              href="https://play.google.com/store/games?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-outline font-bold text-gray-600 hover:text-white"
            >
              <img src={play} alt="" />
              Google Play
            </a>
            <a
              href="https://www.apple.com/uk/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-neutral btn-outline font-bold text-gray-600 hover:text-white ml-5"
            >
              <img src={apple} alt="" />
              App Store
            </a>
          </div>
        </div>
        <img className="block mx-auto" src={hero} alt="" />
      </div>
      {/* facts */}
      <div className="text-white bg-blue-700  py-5">
        <div className="max-w-[1250px] mx-auto">
          <h1 className="text-3xl text-center font-bold pt-5 mb-5 ">
            Trusted by Millions, Built for You
          </h1>
          <div className="flex justify-around flex-col md:flex-row pb-5">
            <div className="stats shadow ">
              <div className="stat">
                <div className="">Total Downloads</div>
                <div className="stat-value">29.6M</div>
                <div className="">21% more than last month</div>
              </div>
            </div>
            <div className="stats shadow ">
              <div className="stat">
                <div className="">Total Downloads</div>
                <div className="stat-value">29.6M</div>
                <div className="">21% more than last month</div>
              </div>
            </div>
            <div className="stats shadow ">
              <div className="stat">
                <div className="">Total Downloads</div>
                <div className="stat-value">29.6M</div>
                <div className="">21% more than last month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
