import { Fragment } from "react";
import styles from "./SkinButton.module.css";

const SkinButton = (props) => {
  // Get rid "default" and put champ name instead
  const skinName =
    props.skinName === "default" ? props.champName : props.skinName;

  const onClickHandler = () => {
    const skinNum = {
      skinNum: props.skinNum,
    };

    props.onSaveSkinNumber(skinNum);
  };
  return (
    <Fragment>
      <button className={styles.button} onClick={onClickHandler}>
        {skinName.toUpperCase()}
      </button>
      <hr />
    </Fragment>
  );
};

export default SkinButton;
