import React, { useState } from "react";
// import { useLoaderData } from "react-router";
import Cards from "../../Components/Cards";
import useCards from "../../Hooks/useCards";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

const Apps = () => {
  const { cards, loading, error } = useCards();

  const [search, setSearch] = useState("");
  const [searching, setSearching] = useState(false);
  //
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearching(true);

    setTimeout(() => {
      setSearching(false);
    }, 400);
  };
  //
  const updatedSearch = search.trim().toLocaleLowerCase();
  //
  const searchedCards = updatedSearch
    ? cards.filter((card) =>
        card.title.toLocaleLowerCase().includes(updatedSearch)
      )
    : cards;
  //
  if (loading || searching) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  //

  return (
    <div className="max-w-[1250px] mx-auto py-6 ">
      {" "}
      <h1 className="text-3xl font-bold py-5 text-center">
        Our All Applications
      </h1>
      <p className="text-center">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      {/* search */}
      <div className="my-7 flex justify-between gap-4 flex-col md:flex-row">
        <h1 className="font-bold text-2xl">
          Apps Found : ({searchedCards.length})
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            placeholder="Search Apps"
          />
        </label>
      </div>
      {/* cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* cards */}
        {searchedCards.length === 0
          ? "No App Found"
          : searchedCards.map((card) => (
              <Cards key={card.id} card={card}></Cards>
            ))}
        {/* {searchedCards.map((card) => (
          <Cards key={card.id} card={card}></Cards>
        ))} */}
      </div>
    </div>
  );
};

export default Apps;
