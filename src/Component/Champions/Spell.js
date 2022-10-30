import { Fragment } from "react";

/**
 * Spell
 * Grabs the image for the appropriate spell/passive
 */
const Spell = (props) => {
  let url = `https://ddragon.leagueoflegends.com/cdn/12.17.1/img/passive/${props.img}`;

  if (!props.passive) {
    url = `https://ddragon.leagueoflegends.com/cdn/12.17.1/img/spell/${props.img}`;
  }
  return (
    <Fragment>
      <input type="image" src={url} onClick={props.descriptionHandler} />
    </Fragment>
  );
};

export default Spell;
