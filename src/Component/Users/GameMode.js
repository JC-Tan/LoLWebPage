// Will Change this...

const modes = new Map();
modes.set(400, "5v5 Draft Pick");
modes.set(410, "5v5 Ranked Dynamic");
modes.set(420, "5v5 Ranked Solo");
modes.set(430, "5v5 Blind Pick");
modes.set(440, "5v5 Ranked Flex");
modes.set(450, "5v5 ARAM");
modes.set(460, "3v3 Blind Pick");
modes.set(470, "3v3 Ranked Flex");

const GameMode = (props) => {
  const mode = modes.get(props.queueId);
  return <h1>{mode}</h1>;
};

export default GameMode;
