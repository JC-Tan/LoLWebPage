import SmallCard from "../UI/SmallCard";
import styles from "./UserItems.module.css";

const UserItems = (props) => {
  if (props.matchInfo.participants.length === 0) {
    return;
  }

  const participants = props.matchInfo.participants;
  const player = participants[props.index];

  const item0 = retrieveItemURL(player.item0);
  const item1 = retrieveItemURL(player.item1);
  const item2 = retrieveItemURL(player.item2);
  const item3 = retrieveItemURL(player.item3);
  const item4 = retrieveItemURL(player.item4);
  const item5 = retrieveItemURL(player.item5);
  const item6 = retrieveItemURL(player.item6);

  const emptyDiv = <div className={`${styles["empty-div"]}`}></div>;

  const ImageDiv = (item) => {
    return <img src={item} alt="Loading..." />;
  };

  /**
   * SmallCardFetcher
   * Checks if item is empty or not. If empty, then
   * it will return a greyed out div. Otherwise,
   * it will return an image of the item
   * @param {*} item
   * @returns
   */
  const SmallCardFetcher = (item) => {
    const check = item === "";
    return (
      <SmallCard
        className={`${styles["item-container"]} ${
          check && styles["empty-div"]
        }`}
      >
        {check ? emptyDiv : ImageDiv(item)}
      </SmallCard>
    );
  };

  return (
    <div className={`${styles["item-container"]}`}>
      <div className={`${styles["main-items"]}`}>
        {SmallCardFetcher(item0)}
        {SmallCardFetcher(item1)}
        {SmallCardFetcher(item2)}
        {SmallCardFetcher(item3)}
        {SmallCardFetcher(item4)}
        {SmallCardFetcher(item5)}
      </div>
      <div>{SmallCardFetcher(item6)}</div>
    </div>
  );
};

const retrieveItemURL = (code) => {
  const itemURL =
    code === 0
      ? ""
      : `https://ddragon.leagueoflegends.com/cdn/12.21.1/img/item/${code}.png`;
  return itemURL;
};

export default UserItems;
