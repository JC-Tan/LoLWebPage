import { Fragment } from "react";
import styles from "./Skin.module.css";

/*
 * Skin
 * Grabs the skin specified by props
 */
const Skin = (props) => {
  let url = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champId}_${props.num}.jpg`;

  return (
    <Fragment>
      <img className={styles.image} src={url} alt="Loading..." />
    </Fragment>
  );
};

export default Skin;
