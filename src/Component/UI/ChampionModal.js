import React from "react";
import ReactDOM from "react-dom";
import ChampionLore from "../Champions/ChampionLore";
import SkinList from "../Champions/SkinList";
import SpellList from "../Champions/SpellList";
import styles from "./ChampionModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  const info = props.champInfo;
  return (
    <div className={styles.modal}>
      <header>
        <h1 className={styles.header}>{props.champName.toUpperCase()}</h1>
      </header>
      <hr />
      <ChampionLore
        tag={info.tags}
        diff={info.info.difficulty}
        lore={info.lore}
      />
      <SpellList champInfo={info} />
      <header>
        <h1 className={styles.header}>AVAILABLE SKINS</h1>
      </header>
      <hr />
      <SkinList champName={info.name} champId={info.id} skinList={info.skins} />
    </div>
  );
};

const ChampionModal = (props) => {
  const champInfo = props.champInfo[props.champId];
  // console.log(champInfo);
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay champName={props.champName} champInfo={champInfo} />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default ChampionModal;
