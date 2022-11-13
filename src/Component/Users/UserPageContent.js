import { useState, useEffect } from "react";
import Form from "./Form";
import User from "./User";
import styles from "./UserPage.module.css";
/* UserPageContent
 * This is the wrapper for all of a user's information
 */
const UserPageContent = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [queues, setQueues] = useState({});
  const [summonerSpells, setSummonerSpells] = useState({});
  const [runes, setRunes] = useState([]);
  const [items, setItems] = useState({});

  const usernameHandler = (enteredUser) => {
    setEnteredUsername(enteredUser);
  };

  useEffect(() => {
    fetchMatchListHandler();
    fetchSummonerSpellsHandler();
    fetchRunesHandler();
    fetchItemHandler();
  }, []);

  const fetchMatchListHandler = async () => {
    const queuesURL =
      "https://static.developer.riotgames.com/docs/lol/queues.json";
    try {
      const response = await fetch(queuesURL);

      if (!response.ok) {
        throw new Error("Queues fetch failed!");
      }

      const data = await response.json();
      setQueues(data);
    } catch (error) {}
  };

  const fetchSummonerSpellsHandler = async () => {
    const summonerURL =
      "https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/summoner.json";
    try {
      const response = await fetch(summonerURL);

      if (!response.ok) {
        throw new Error("Summoner spells fetch failed!");
      }

      const data = await response.json();
      setSummonerSpells(data);
    } catch (error) {}
  };

  const fetchRunesHandler = async () => {
    // Rune resources:
    // https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/runesReforged.json
    // https://ddragon.leagueoflegends.com/cdn/img/+path it's icon property
    // https://ddragon.leagueoflegends.com/cdn/img/perk-images/Styles/Domination/Electrocute/Electrocute.png
    const runeURL =
      "https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/runesReforged.json";
    try {
      const response = await fetch(runeURL);

      if (!response.ok) {
        throw new Error("Runes fetch failed!");
      }

      const data = await response.json();
      setRunes(data);
    } catch (error) {}
  };

  const fetchItemHandler = async () => {
    const itemURL =
      "https://ddragon.leagueoflegends.com/cdn/12.21.1/data/en_US/item.json";

    try {
      const response = await fetch(itemURL);

      if (!response.ok) {
        throw new Error("Item fetch failed!");
      }

      const data = await response.json();
      setItems(data);
    } catch (error) {}
  };
  return (
    <div className={`${styles["main-container"]}`}>
      <div className={`${styles["form-container"]}`}>
        <Form onAddUsername={usernameHandler} />
      </div>
      <div className={`${styles["user-container"]}`}>
        <User
          name={enteredUsername}
          queues={queues}
          summonerSpells={summonerSpells}
          runes={runes}
          items={items}
        ></User>
      </div>
    </div>
  );
};

export default UserPageContent;
