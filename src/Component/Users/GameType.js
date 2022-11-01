import GameMode from "./GameMode";

/**
 * GameType
 * This houses the game mode, duration, win/lose, etc.
 */
const GameType = (props) => {
  if (props.teams.length === 0 || props.participants.length === 0) {
    return;
  }

  const playerPuuid = props.puuid;
  const participants = props.participants;
  const queueId = props.queueId;
  const duration = props.gameDuration;
  const creation = props.gameDuration;
  const teams = props.teams;

  const index = findIndex(playerPuuid, participants);
  const teamNum = index <= 4 ? 0 : 1;

  const result = gameResult(teamNum, teams);
  return (
    <div>
      <GameMode queueId={queueId} />
      <h1>{result}</h1>
    </div>
  );
};

const findIndex = (playerPuuid, participants) => {
  const key = (puuid) => puuid === playerPuuid;
  return participants.findIndex(key);
};

const gameResult = (teamNum, teams) => {
  const win = teams[teamNum].win;
  return win ? "Victory" : "Defeat";
};

const gameMode = (queueId) => {};
export default GameType;
