import GameMode from "./GameMode";

/**
 * GameType
 * This houses the game mode, duration, win/lose, etc.
 */
const GameType = (props) => {
  if (props.matchInfo.teams.length === 0) {
    return;
  }

  const queueId = props.matchInfo.queueId;
  const duration = new Date(props.matchInfo.gameDuration * 1000);
  const creation = new Date(props.matchInfo.gameCreation);
  const [minutes, seconds] = [duration.getMinutes(), duration.getSeconds()];
  const teams = props.matchInfo.teams;

  const teamNum = props.index <= 4 ? 0 : 1;
  const gameType = gameMode(queueId, props.queues);

  const result = gameResult(teamNum, teams);
  return (
    <div>
      <h2>{gameType}</h2>
      <h2>{result}</h2>
      <h2>{creation.toLocaleDateString()}</h2>
      <h2>
        {minutes}m {seconds}s
      </h2>
    </div>
  );
};

/**
 * gameResult
 * Uses teamNum to select the team and returns
 * a victory if win is true. Defeat if win is false
 * @param {*} teamNum
 * @param {*} teams
 * @returns
 */
const gameResult = (teamNum, teams) => {
  const win = teams[teamNum].win;
  return win ? "Victory" : "Defeat";
};

/**
 * gameMode
 * Grabs the index from the list of queue types and then
 * returns the game type. Gets rid of the word 'games' and
 * trims the result
 * @param {*} queueId
 * @param {*} queues
 * @returns
 */
const gameMode = (queueId, queues) => {
  const index = queues.findIndex((q) => q.queueId === queueId);
  return queues[index].description.replace("games", "").trim();
};
export default GameType;
