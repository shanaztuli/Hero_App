import React from "react";
import { useState } from "react";
import { loadInstalledApp, removeFromLandUI } from "../../utility/localStorage";
import { toast, ToastContainer } from "react-toastify";
import useCards from "../../Hooks/useCards";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
const Installation = () => {
  const { loading } = useCards();
  const [installed, setInstalled] = useState(() => loadInstalledApp());

  const [sortOrder, setSortOrder] = useState("none");
  //
  if (!installed || installed.length === 0)
    return (
      <p className="text-center font-bold text-3xl my-7">
        No apps installed yet
      </p>
    );
  //
  const sortedItem = (() => {
    if (sortOrder === "Downloads-ascending") {
      return [...installed].sort((a, b) => a.downloads - b.downloads);
    } else if (sortOrder === "Downloads-descending") {
      return [...installed].sort((a, b) => b.downloads - a.downloads);
    } else {
      return installed;
    }
  })();

  //
  const handleRemove = (id) => {
    // remove from localstorage
    removeFromLandUI(id);
    // ui  update ar
    setInstalled((prev) => prev.filter((p) => p.id !== id));

    toast.info(`✅ "Your app has been uninstalled!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-[1250px] mx-auto py-6 ">
      {" "}
      <h1 className="text-3xl font-bold py-5 text-center">
        Your Installed Apps
      </h1>
      <p className="text-center">
        Explore All Trending Apps on the Market developed by us
      </p>
      {/*  */}
      <div className="my-7 flex justify-between gap-4 flex-col md:flex-row">
        <h1 className="font-bold text-2xl">Apps Found : {installed.length}</h1>
        {/*  */}
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort by Downloads</option>
            <option value="Downloads-ascending">Low-&gt;High</option>
            <option value="Downloads-descending">High-&gt;Low</option>
          </select>
        </label>
      </div>
      {/*  */}
      <div className="space-y-5">
        {sortedItem.map((p) => (
          <div key={p.id} className="card card-side bg-base-100 shadow border">
            <figure>
              <img className="w-40 h-28 object-cover" src={p.image} />
            </figure>
            <div className="card-body">
              <h3 className="card-title">{p.title}</h3>
              <p className="text-base-content/70"> Rating : {p.ratingAvg}</p>
            </div>
            <div className="pr-4 flex items-center gap-3">
              <div className="font-semibold">${p.downloads}</div>
              <button
                onClick={() => handleRemove(p.id)}
                className="btn bg-green-400 text-white"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Installation;
