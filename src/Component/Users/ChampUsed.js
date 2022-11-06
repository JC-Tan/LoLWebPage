import styles from "./ChampUsed.module.css";

const ChampUsed = (props) => {
  if (props.matchInfo.participants.length === 0 || props.runes.length === 0) {
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

  const pStyle = player.perks.styles[0];
  const sStyle = player.perks.styles[1];

  const primaryStyle = grabPrimaryStyleHandler(
    pStyle.style,
    pStyle.selections[0].perk,
    props.runes
  );

  const secondaryStyle = grabSecondaryStyleHandler(sStyle.style, props.runes);

  console.log(primaryStyle);
  const champImageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champUsed}_0.jpg`;
  const summoner1URL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${summoner1}.png`;
  const summoner2URL = `http://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/${summoner2}.png`;
  const primaryStyleURL = `https://ddragon.leagueoflegends.com/cdn/img/${primaryStyle.icon}`;
  const secondaryStyleURL = `https://ddragon.leagueoflegends.com/cdn/img/${secondaryStyle.icon}`;

  return (
    <div className={`${styles["main-wrapper"]}`}>
      <div className={`${styles["champ-wrapper"]}`}>
        <img
          className={`${styles["champ-image"]}`}
          src={champImageURL}
          alt="Loading"
        />
      </div>
      <div className={`${styles["tiny-wrapper"]}`}>
        <img className={styles.tiny} src={summoner1URL} alt="Loading" />
        <img className={styles.tiny} src={summoner2URL} alt="Loading" />
      </div>
      <div className={`${styles["tiny-wrapper"]}`}>
        <img className={styles.primary} src={primaryStyleURL} alt="Loading" />
        <img className={styles.tiny} src={secondaryStyleURL} alt="Loading" />
      </div>
    </div>
  );
};

/**
 * grabSummonerSpellName
 * Looks for a spell using a key
 * @param {*} summonerKey
 * @param {*} summonerSpells
 * @returns
 */
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

/**
 * grabPrimaryStyleHandler
 * Grabs the primary style chosen by a player from the runes list
 * @param {*} style
 * @param {*} perk0
 * @param {*} runes
 * @returns
 */
const grabPrimaryStyleHandler = (style, perk0, runes) => {
  let primaryStyle = {};
  for (let i = 0; i < runes.length; i++) {
    const primary = runes[i];
    if (style === primary.id) {
      const slots = primary.slots[0].runes;

      for (let j = 0; j < slots.length; j++) {
        if (perk0 === slots[j].id) {
          primaryStyle = { ...slots[j] };
        }
      }
    }
  }
  return primaryStyle;
};

const grabSecondaryStyleHandler = (style, runes) => {
  for (let i = 0; i < runes.length; i++) {
    const rune = runes[i];
    if (style === rune.id) {
      return {
        id: rune.id,
        key: rune.key,
        icon: rune.icon,
        name: rune.name,
      };
    }
  }
};
export default ChampUsed;
