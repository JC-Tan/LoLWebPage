import { Fragment } from "react";
import styles from "./Spell.module.css";
const Spell = (props) => {
  let url = `http://ddragon.leagueoflegends.com/cdn/12.17.1/img/passive/${props.img}`;

  if (!props.passive) {
    url = `http://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/${props.img}`;
  }
  return (
    <Fragment>
      <input type="image" src={url} onClick={props.descriptionHandler} />
    </Fragment>
  );
};

export default Spell;
