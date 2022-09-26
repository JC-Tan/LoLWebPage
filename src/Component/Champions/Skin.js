import { Fragment } from "react";
import styles from "./Skin.module.css";

const Skin = (props) => {
  let url = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${props.champId}_${props.num}.jpg`;

  return (
    <Fragment>
      <img className={styles.image} src={url} alt="Loading..." />
    </Fragment>
  );
};

export default Skin;
