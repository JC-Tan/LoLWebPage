const KDA = (props) => {
  if (props.matchInfo.participants.length === 0) {
    return;
  }

  const participants = props.matchInfo.participants;
  const player = participants[props.index];
  const kills = player.kills;
  const deaths = player.deaths;
  const assists = player.assists;
  const kda = Math.round((100 * (kills + assists)) / deaths) / 100;
  const minionKills = player.totalMinionsKilled;

  return (
    <div>
      <h1>
        {kills}/{deaths}/{assists}
      </h1>
      <h1>{kda.toFixed(2)} KDA</h1>
      <h1>{minionKills} CS</h1>
    </div>
  );
};

export default KDA;
