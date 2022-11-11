import SmallCard from "../UI/SmallCard";

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

  return (
    <div>
      <SmallCard>
        {item0 === "" ? <br /> : <img src={item0} alt="Loading..." />}
      </SmallCard>
      <SmallCard>
        {item1 === "" ? <br /> : <img src={item1} alt="Loading..." />}
      </SmallCard>
      <SmallCard>
        {item2 === "" ? <br /> : <img src={item2} alt="Loading..." />}
      </SmallCard>
      <SmallCard>
        {item3 === "" ? <br /> : <img src={item3} alt="Loading..." />}
      </SmallCard>
      <SmallCard>
        {item4 === "" ? <br /> : <img src={item4} alt="Loading..." />}
      </SmallCard>
      <SmallCard>
        {item5 === "" ? <br /> : <img src={item5} alt="Loading..." />}
      </SmallCard>
      <SmallCard>
        {item6 === "" ? <br /> : <img src={item6} alt="Loading..." />}
      </SmallCard>
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
