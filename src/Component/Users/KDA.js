import styles from "./KDA.module.css";
/**
 * KDA
 * Contains the kills, deaths, and assists of a player
 * KDA is the sum of kills and deaths divided by the number of deaths
 * CS is the number of minions killed
 * @param {*} props
 * @returns
 */
const KDA = (props) => {
  if (props.matchInfo.participants.length === 0) {
    return;
  }

  const participants = props.matchInfo.participants;
  const player = participants[props.index];
  const kills = player.kills;
  const deaths = player.deaths;
  const assists = player.assists;
  const kda = Math.round((100 * (kills + assists)) / deaths) / 100;
  const minionKills = player.totalMinionsKilled;

  return (
    <div className={`${styles["kda-container"]}`}>
      <span className={styles.kda}>
        {kills}/{deaths}/{assists}
      </span>
      <span className={styles.ratio}>{kda.toFixed(2)} KDA</span>
      <span className={styles.cs}>{minionKills} CS</span>
    </div>
  );
};

export default KDA;
