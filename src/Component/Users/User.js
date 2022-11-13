import { useEffect, useState, useCallback } from "react";
import MatchHistory from "./MatchHistory";
import styles from "./User.module.css";

/**
 * User
 * Grabs a user's information by using their summoner name
 * Info includes:
 *                - id
 *                - accountId
 *                - name
 *                - profileIconId
 *                - puuid
 *                - summonerLevel
 *                - revisionDate
 */
const User = (props) => {
  const [userData, setUserData] = useState({});
  const [showLoading, setShowLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const fetchUserInfoHandler = useCallback(async () => {
    setError(null);
    setIsLoading(true);
    if (props.name.length === 0) {
      setShowLoading(false);
      return;
    }
    setShowLoading(true);
    const NA_ROUTE = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${props.name}?api_key=${process.env.REACT_APP_API_KEY}`;
    try {
      const response = await fetch(NA_ROUTE);

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [props.name]);

  useEffect(() => {
    fetchUserInfoHandler();
  }, [fetchUserInfoHandler]);

  let content = (
    <div className={`${styles["main-container"]}`}>
      <div className={`${styles["user-container"]}`}>
        <div className={`${styles["image-container"]}`}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${userData.profileIconId}.png`}
            alt="Loading"
          />
        </div>
        <div className={`${styles["name-container"]}`}>
          <span className={styles.name}>{userData.name}</span>
          <span className={styles.level}>Level {userData.summonerLevel}</span>
        </div>
      </div>
      <div className={`${styles["history-container"]}`}>
        <MatchHistory
          puuid={userData.puuid}
          queues={props.queues}
          summonerSpells={props.summonerSpells}
          runes={props.runes}
        />
      </div>
    </div>
  );

  if (!showLoading) {
    content = <p></p>;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading && showLoading) {
    content = <p>Loading...</p>;
  }

  return <div>{content}</div>;
};

export default User;
