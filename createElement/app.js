const players = [
  {
    name: "Guil",
    score: 50
  },
  {
    name: "Treasure",
    score: 85
  },
  {
    name: "Ashley",
    score: 95
  },
  {
    name: "James",
    score: 80
  }
];

const Header = props => (
  <div>
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  </div>
);

const Player = props => {
  return (
    <div>
      <div className="player">
        <span className="player-name">{props.playerName}</span>
        <Counter score={props.score} />
      </div>
    </div>
  );
};

const Counter = props => (
  <div className="counter">
    <button className="counter-action decrement"> - </button>
    <span className="counter-score">{props.score}</span>
    <button className="counter-action increment"> + </button>
  </div>
);

const App = props => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={props.initialPlayers.length} />
      {props.initialPlayers.map(player => (
        <Player playerName={player.name} score={player.score} />
      ))}
    </div>
  );
};

ReactDOM.render(
  <App initialPlayers={players} />,
  document.getElementById("root")
);
