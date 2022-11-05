const ChampUsed = (props) => {
  if (props.matchInfo.participants.length === 0) {
    return;
  }
  const participants = props.matchInfo.participants;
  const player = participants[props.index];
  const champUsed = player.championName;
  const summoner1 = grabSummonerSpellName(
    player.summoner1Id,
    props.summonerSpells
  );
  const summoner2 = grabSummonerSpellName(
    player.summoner2Id,
    props.summonerSpells
  );

  const champImageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champUsed}_0.jpg`;
  const summoner1URL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${summoner1}.png`;
  const summoner2URL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${summoner2}.png`;

  return (
    <div>
      <img src={champImageURL} alt="Loading" />
      <img src={summoner1URL} alt="Loading" />
      <img src={summoner2URL} alt="Loading" />
    </div>
  );
};

const grabSummonerSpellName = (summonerKey, summonerSpells) => {
  const data = summonerSpells.data;
  let id = "";
  Object.keys(data).forEach((spell) => {
    if (data[spell].key === "" + summonerKey) {
      id = data[spell].id;
    }
  });
  return id;
};

export default ChampUsed;
