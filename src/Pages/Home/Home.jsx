import React from "react";
import Banner from "../../Components/Banner";
import { Link, useLoaderData } from "react-router";
import Cards from "../../Components/Cards";
import useCards from "../../Hooks/useCards";

const Home = () => {
  const { cards, loading, error } = useCards();
  const trendingCards = cards.slice(0, 8);
  // console.log(cards);
  // console.log(data);
  return (
    <div className="bg-base-200">
      <Banner></Banner>
      <div className="max-w-[1250px] mx-auto pb-5 ">
        <h1 className="text-3xl font-bold py-5 text-center">Trending Apps</h1>
        {/* card parent */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* cards */}
          {trendingCards.map((card) => (
            <Cards key={card.id} card={card}></Cards>
          ))}
        </div>
        {/* button */}
        <div className="flex justify-center mt-5">
          <Link to="/apps">
            {" "}
            <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white ">
              {" "}
              Show All
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
