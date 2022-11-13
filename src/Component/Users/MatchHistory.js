import { Fragment, useCallback, useEffect, useState } from "react";
import Match from "./Match";
import styles from "./MatchHistory.module.css";

/**
 * MatchHistory
 * Contains the match history of a user
 */
const MatchHistory = (props) => {
  const [matchList, setMatchList] = useState([]);
  const puuid = props.puuid;

  const fetchMatchListHandler = useCallback(async () => {
    if (puuid.length === 0) {
      return;
    }
    const matchListURL = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(matchListURL);

      if (!response.ok) {
        throw new Error("Match list fetch failed!");
      }

      const data = await response.json();
      setMatchList([...data]);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchMatchListHandler();
  }, [fetchMatchListHandler]);

  return (
    <Fragment>
      <div>
        {matchList.map((match) => (
          <Match
            key={match}
            puuid={puuid}
            matchId={match}
            queues={props.queues}
            summonerSpells={props.summonerSpells}
            runes={props.runes}
          />
        ))}
      </div>
    </Fragment>
  );
};

export default MatchHistory;
