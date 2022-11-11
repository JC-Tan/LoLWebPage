import SmallCard from "../UI/SmallCard";
import styles from "./Participants.module.css";

const Participants = (props) => {
  if (props.matchInfo.participants.length === 0) {
    return;
  }

  const participants = props.matchInfo.participants;

  // profileIcon
  // summonerName

  return (
    <div className={`${styles["main-container"]}`}>
      {participants.map((player) => (
        <div key={player.puuid} className={`${styles["player-container"]}`}>
          <SmallCard>
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/12.21.1/img/profileicon/${player.profileIcon}.png`}
              alt="Loading"
            />
          </SmallCard>
          <div>
            <p>{player.summonerName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Participants;
