import { Fragment, useState } from "react";
import Spell from "./Spell";
import styles from "./SpellList.module.css";

const SpellList = (props) => {
  const spellList = props.champInfo.spells;
  const passive = props.champInfo.passive;
  const pImg = passive.image.full;
  const qImg = spellList[0].image.full;
  const wImg = spellList[1].image.full;
  const eImg = spellList[2].image.full;
  const rImg = spellList[3].image.full;
  const [description, setDescription] = useState(passive.description);
  const [spellName, setSpellName] = useState(passive.name);

  const isPassive = true;

  const pDescriptionHandler = () => {
    setDescription(passive.description);
    setSpellName(passive.name);
  };

  const qDescriptionHandler = () => {
    setDescription(spellList[0].description);
    setSpellName(spellList[0].name);
  };

  const wDescriptionHandler = () => {
    setDescription(spellList[1].description);
    setSpellName(spellList[1].name);
  };

  const eDescriptionHandler = () => {
    setDescription(spellList[2].description);
    setSpellName(spellList[2].name);
  };

  const rDescriptionHandler = () => {
    setDescription(spellList[3].description);
    setSpellName(spellList[3].name);
  };

  return (
    <Fragment>
      <h1 className={styles.header}>ABILITIES</h1>
      <hr />
      <div className={styles[`${"spell-list"}`]}>
        <Spell
          img={pImg}
          passive={isPassive}
          descriptionHandler={pDescriptionHandler}
        />
        <Spell
          img={qImg}
          passive={!isPassive}
          descriptionHandler={qDescriptionHandler}
        />
        <Spell
          img={wImg}
          passive={!isPassive}
          descriptionHandler={wDescriptionHandler}
        />
        <Spell
          img={eImg}
          passive={!isPassive}
          descriptionHandler={eDescriptionHandler}
        />
        <Spell
          img={rImg}
          passive={!isPassive}
          descriptionHandler={rDescriptionHandler}
        />
      </div>
      <div className={styles.description}>
        <h2>{spellName}</h2>
        <p>{description}</p>
      </div>
    </Fragment>
  );
};

export default SpellList;
