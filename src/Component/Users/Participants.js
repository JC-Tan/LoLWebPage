import styles from "./Participants.module.css";

const Participants = (props) => {
  if (props.matchInfo.participants.length === 0) {
    return;
  }

  const participants = props.matchInfo.participants;

  return (
    <div className={`${styles["main-container"]}`}>
      <div className={styles.team}>{Slicer(0, 5, participants)}</div>
      <div className={styles.team}>{Slicer(5, 10, participants)}</div>
    </div>
  );
};

/**
 * Slicer
 * @param {*} lo low bound
 * @param {*} hi hi bound
 * @param {*} arr array to be sliced
 * @returns
 */
const Slicer = (lo, hi, arr) => {
  return arr.slice(lo, hi).map((player) => (
    <div key={player.puuid} className={`${styles["player-container"]}`}>
      <div className={`${styles["image-container"]}`}>
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/${player.championName}.png`}
          alt="Loading"
        />
      </div>
      <div className={`${styles["summoner-name"]}`}>
        <span>{player.summonerName}</span>
      </div>
    </div>
  ));
};
export default Participants;
