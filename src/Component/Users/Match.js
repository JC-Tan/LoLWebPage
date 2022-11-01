import { useCallback, useEffect, useState } from "react";
import GameType from "./GameType";

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
        // participants: [...info.participants],
      };
      setMatchInfo(dataInfo);
    } catch (error) {}
  }, []);

  useEffect(() => {
    fetchMatchHandler();
  }, [fetchMatchHandler]);

  return (
    <div>
      <GameType
        puuid={props.puuid}
        queueId={matchInfo.queueId}
        gameDuration={matchInfo.gameDuration}
        gameCreation={matchInfo.gameCreation}
        teams={matchInfo.teams}
        participants={matchParticipants}
      />
    </div>
  );
};

export default Match;
