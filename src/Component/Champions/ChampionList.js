import Champion from "./Champion";
import styles from "./ChampionList.module.css";

/**
 * ChampionList
 * Displays all the champions.
 */
const ChampionList = (props) => {
  if (props.champList.length === 0) {
    console.log("here");
    return;
  }
  return (
    <ul className={`${styles["champion-list"]}`}>
      {props.champList.map((champ) => (
        <Champion
          key={champ[1].name}
          champId={champ[1].id}
          champName={champ[1].name}
        />
      ))}
    </ul>
  );
};

export default ChampionList;
