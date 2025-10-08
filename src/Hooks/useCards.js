import axios from "axios";
import React, { useEffect, useState } from "react";

const useCards = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios("../appData.json")
      .then((data) => setCards(data.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);
  return { cards, loading, error };
};

export default useCards;
