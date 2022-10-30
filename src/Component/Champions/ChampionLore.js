import styles from "./ChampionLore.module.css";
import ChampionTag from "./ChampionTag";

/**
 * ChampionLore
 * Used to display a champion's lore. It also
 * houses the ChampionTag
 */
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
