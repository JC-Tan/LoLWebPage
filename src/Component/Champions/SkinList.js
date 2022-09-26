import { useState } from "react";
import SkinButton from "./SkinButton";
import Skin from "./Skin";
import styles from "./SkinList.module.css";

const DEFAULT_SKIN = 0;

const SkinList = (props) => {
  // Set the background image to the default SKIN
  const [backgroundImg, setBackgroundImg] = useState(
    <Skin champId={props.champId} num={DEFAULT_SKIN} />
  );

  const saveSkinNumHandler = (skinData) => {
    // Change the skin according to the skin number
    setBackgroundImg(<Skin champId={props.champId} num={skinData.skinNum} />);
  };

  return (
    <div className={`${styles["main-wrapper"]}`}>
      <div className={`${styles["list-wrapper"]}`}>
        <ul className={`${styles["skin-list"]}`}>
          {props.skinList.map((skin) => (
            <li key={skin.id}>
              <SkinButton
                champName={props.champName}
                skinName={skin.name}
                skinNum={skin.num}
                onSaveSkinNumber={saveSkinNumHandler}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.background}>{backgroundImg}</div>
    </div>
  );
};

export default SkinList;
