import styles from "./ChampionLore.module.css";
import ChampionTag from "./ChampionTag";

const ChampionLore = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.lore}>{props.lore}</div>
      <div className={styles.divider} />
      <ChampionTag tag={props.tag[0]} diff={props.diff} />
    </div>
  );
};

export default ChampionLore;
