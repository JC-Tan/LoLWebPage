import { Fragment, useCallback, useEffect, useState } from "react";
import Card from "../UI/Card";
import ChampionModal from "../UI/ChampionModal";
import styles from "./Champion.module.css";

/**
 * Champion
 * Grabs a champion's information
 */
const Champion = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [champInfo, setChampInfo] = useState();

  // Variable to handle error
  const [error, setError] = useState(null);

  // For loading
  const [isLoading, setIsLoading] = useState(false);

  const champImageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${props.champId}_0.jpg`;

  const fetchChampInfoHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion/${props.champId}.json`
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      } else {
        const data = await response.json();
        setChampInfo(data);
      }
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [props.champId]);

  useEffect(() => {
    fetchChampInfoHandler();
  }, []);

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <Fragment>
      {/* Modal will only show if openModal is true */}
      {openModal && (
        <ChampionModal
          champName={props.champName}
          onConfirm={closeModalHandler}
          champInfo={champInfo.data}
          champId={props.champId}
        />
      )}
      <li onClick={openModalHandler}>
        <Card className={`${styles.champion}`}>
          <img src={champImageURL} alt="" />
          <h2>{props.champName.toUpperCase()}</h2>
        </Card>
      </li>
    </Fragment>
  );
};

export default Champion;
