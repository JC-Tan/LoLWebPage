import styles from "./GameType.module.css";

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
    <div className={`${styles["type-container"]}`}>
      <span className={styles.type}>{gameType}</span>
      <span className={styles.creation}>{creation.toLocaleDateString()}</span>
      <div className={styles.bar} />
      <span className={styles.result}>{result}</span>
      <span className={styles.duration}>
        {minutes}m {seconds}s
      </span>
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
