import React from "react";
import Header from "./Header";
import PlayerList from "./PlayerList";
import AddPlayerForm from "./AddPlayerForm";

const App = () => {
  return (
    <div className="scoreboard">
      <Header />
      <PlayerList />
      <AddPlayerForm addPlayer={this.handleAddPlayer} />
    </div>
  );
};

export default App;
