import styles from "./SmallCard.module.css";

const SmallCard = (props) => {
  return (
    <div className={`${styles["small-card"]} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default SmallCard;
