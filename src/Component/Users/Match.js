import { useCallback, useEffect, useState } from "react";
import ChampUsed from "./ChampUsed";
import GameType from "./GameType";
import styles from "./Match.module.css";

/*
 * Match
 * TBA...
 */
const Match = (props) => {
  const matchId = props.matchId;
  const [matchParticipants, setMatchParticipants] = useState([]);
  const [matchInfo, setMatchInfo] = useState({
    gameMode: "",
    gameDuration: 0,
    gameCreation: 0,
    teams: [],
    participants: [],
  });

  const fetchMatchHandler = useCallback(async () => {
    if (matchId.length === 0) {
      return;
    }

    const requestURL = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${process.env.REACT_APP_API_KEY}`;

    try {
      const response = await fetch(requestURL);

      if (!response.ok) {
        throw new Error("Single match fetch failed!");
      }

      const data = await response.json();
      setMatchParticipants(data.metadata.participants);
      const info = data.info;
      const dataInfo = {
        queueId: info.queueId,
        gameDuration: info.gameDuration,
        gameCreation: info.gameCreation,
        teams: info.teams,
        participants: info.participants,
      };
      setMatchInfo(dataInfo);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchMatchHandler();
  }, [fetchMatchHandler]);

  const index = findIndex(props.puuid, matchParticipants);

  return (
    <div className={`${styles["info-container"]}`}>
      <GameType queues={props.queues} matchInfo={matchInfo} index={index} />
      <ChampUsed
        index={index}
        matchInfo={matchInfo}
        summonerSpells={props.summonerSpells}
      />
    </div>
  );
};

/**
 * findIndex
 * Finds the index of the player from the list of participants
 * by using their puuid
 * @param {*} playerPuuid
 * @param {*} participants
 * @returns
 */
const findIndex = (playerPuuid, participants) => {
  const key = (puuid) => puuid === playerPuuid;
  return participants.findIndex(key);
};

export default Match;
