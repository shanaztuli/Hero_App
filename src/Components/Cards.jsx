import React from "react";
import img1 from "../assets/icon-downloads.png";
import img2 from "../assets/icon-ratings.png";
import { Link } from "react-router";
import useCards from "../Hooks/useCards";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
// import ratingImg from "../assets/icon-rating.png";

const Cards = ({ card }) => {
  const { loading } = useCards();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  //   console.log(card);
  const { title, image, downloads, ratingAvg, id } = card;
  return (
    <Link to={`/apps/${id}`}>
      <div>
        <div className="card bg-base-100  shadow-sm p-4">
          <figure className="">
            <img className="w-full h-50 rounded-xl" src={image} alt="Shoes" />
          </figure>
          <div className="">
            <h2 className="card-title py-4"> Title : {title}</h2>
            <div className="flex justify-between items-center">
              <button className="btn text-green-400">
                <img className="h-6" src={img1} alt="" /> {downloads}
              </button>
              <button className="btn text-yellow-400">
                <img className="h-6" src={img2} alt="" /> {ratingAvg}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Cards;
