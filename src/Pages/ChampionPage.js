import { useState, useEffect, useCallback } from "react";
import ChampionList from "../Component/Champions/ChampionList";
import styles from "./ChampionPage.module.css";

const ChampionPage = (props) => {
  // List of champs
  const [champList, setChampList] = useState([]);

  // Variable to handle error
  const [error, setError] = useState(null);

  // For loading
  const [isLoading, setIsLoading] = useState(false);

  // Function that retrieves the json of champs
  // useCallback is used for efficiency
  const fetchChampionsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json"
      );

      // Throw an error if something happens
      if (!response.ok) {
        throw new Error("Something went wrong!");
      } else {
        const data = await response.json();
        const dataList = Object.keys(data.data).map((key) => [
          key,
          data.data[key],
        ]);
        setChampList(dataList);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []); // No external dependencies here so we don't put anything

  // Loads the list of champions when app is rendered
  useEffect(() => {
    fetchChampionsHandler();
  }, [fetchChampionsHandler]);

  let content = <p>Found no champions...</p>;

  if (champList.length > 0) {
    content = <ChampionList champList={champList} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return <div className={`${styles["list-container"]}`}>{content}</div>;
};

export default ChampionPage;
