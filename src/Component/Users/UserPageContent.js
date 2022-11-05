import { useState, useEffect } from "react";
import Form from "./Form";
import User from "./User";

/* UserPageContent
 * This is the wrapper for all of a user's information
 */
const UserPageContent = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [queues, setQueues] = useState({});
  const [summonerSpells, setSummonerSpells] = useState({});

  const usernameHandler = (enteredUser) => {
    setEnteredUsername(enteredUser);
  };

  useEffect(() => {
    fetchMatchListHandler();
    fetchSummonerSpellsHandler();
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
        throw new Error("Queues fetch failed!");
      }

      const data = await response.json();
      setSummonerSpells(data);
    } catch (error) {}
  };

  return (
    <div>
      <h3>TODO: Styles...</h3>
      <div>
        <Form onAddUsername={usernameHandler} />
      </div>
      <div>
        <h1>User Info</h1>
        <User
          name={enteredUsername}
          queues={queues}
          summonerSpells={summonerSpells}
        ></User>
      </div>
    </div>
  );
};

export default UserPageContent;
