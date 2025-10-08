import React, { useState } from "react";
import { useParams } from "react-router";
import useCards from "../../Hooks/useCards";
import img1 from "../../assets/icon-downloads.png";
import img2 from "../../assets/icon-ratings.png";
import img3 from "../../assets/icon-review.png";
import { toast, ToastContainer } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Error from "../ErrorPage/Error";
import NotFound from "../ErrorPage/NotFound";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import { loadInstalledApp, updateList } from "../../utility/localStorage";

const CardDetails = () => {
  const { id } = useParams();
  const { cards, loading } = useCards();
  // const [install, setInstall] = useState(false);

  const card = cards.find((c) => c.id === Number(id));
  //
  const [install, setInstall] = useState(() => {
    const installedApps = loadInstalledApp();
    return installedApps.some((app) => app.id === Number(id));
  });
  //
  if (!card) {
    return <NotFound></NotFound>;
  }
  //   console.log(id);
  const { image, downloads, ratingAvg, ratings, reviews, description } = card;

  if (loading) return <LoadingSpinner></LoadingSpinner>;

  //rechards

  const handleInstall = () => {
    updateList(card);
    setInstall(true);

    toast.success("✅ App installed successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row gap-7 max-w-[1250px] mx-auto ">
        <img className="h-[400px]" src={image} alt="" />
        <div>
          <h1 className="p-4 border-b-2 border-gray-400">
            Developed by <span className="text-purple-600">productive.io</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            {/*  */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">
                  <img src={img1} alt="" />
                </div>

                <div className="stat-desc">Downloads</div>
                <div className="stat-value">{downloads}</div>
              </div>
            </div>
            {/*  */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">
                  <img src={img2} alt="" />
                </div>

                <div className="stat-desc">Average Ratings</div>
                <div className="stat-value">{ratingAvg}</div>
              </div>
            </div>
            {/*  */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">
                  <img src={img3} alt="" />
                </div>

                <div className="stat-desc">Total Reviews</div>
                <div className="stat-value">{reviews}</div>
              </div>
            </div>
          </div>
          {/* button  */}

          <button
            onClick={handleInstall}
            disabled={install}
            className={`btn btn-accent text-white mt-4 mb-3 ${
              install ? " opacity-100 cursor-not-allowed" : ""
            }`}
          >
            {install ? "Installed" : "Install Now (291 MB)"}
          </button>
        </div>

        {/*  */}
      </div>
      <ToastContainer></ToastContainer>
      {/* recharts */}
      <div className=" max-w-[1250px] mx-auto border-t-2 border-gray-400 mt-4 ">
        <div className="mt-6 w-full md:w-1/2 ">
          <h2 className="text-xl font-bold mb-2">Ratings</h2>
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              data={ratings} // use the ratings array
              layout="vertical" // bars start from left
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="count" fill="#8884d8" barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="border-t-2 border-gray-400 py-5  max-w-[1250px] mx-auto ">
        <h2 className="text-xl font-bold mb-2">Description </h2>
        <p>
          {description} A unique feature of this app is the integration of task
          lists with timers. You can assign each task to a specific Pomodoro
          session, making your schedule more structured. The built-in analytics
          show not only how much time you ve worked but also which tasks
          consumed the most energy. This allows you to reflect on your
          efficiency and adjust your workflow accordingly. The app also includes
          optional background sounds such as white noise, nature sounds, or
          instrumental music to create a distraction-free atmosphere.
        </p>
      </div>
    </div>
  );
};

export default CardDetails;
