import React, { Component } from "react";
import { Provider } from "./Context";
import Header from "./Header";
import Player from "./Player";
import AddPlayerForm from "./AddPlayerForm";

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  ///player id counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState(prevState => ({
      score: (prevState.players[index].score += delta)
    }));
  };

  handleAddPlayer = name => {
    this.setState(prevState => {
      return {
        players: [
          ...prevState.players,
          {
            name: name,
            score: 0,
            id: (this.prevPlayerId += 1),
            showCrown: false
          }
        ]
      };
    });
  };

  handleRemovePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };

  getHighScore = () => {
    // First, filter through the players state to get all the player scores
    const scores = this.state.players.map(p => p.score);
    //console.log(scores);
    //Use Math.max() to return the largest score value. All scores are passed to Math.max() via the spread operator (...scores)
    const highScore = Math.max(...scores);
    //console.log({ highScore });
    //Then check: if there's a highest score (a score greater than 0), return that score
    if (highScore > 0) {
      return highScore;
    }
    //Otherwise, return null because there is no high score
    return null;
  };

  render() {
    const highScore = this.getHighScore();
    return (
      <Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer
          }
        }}
      >
        <div className="scoreboard">
          <Header />

          {/* Players list */}
          {this.state.players.map((player, index) => (
            <Player
              name={player.name}
              index={index}
              id={player.id}
              key={player.id.toString()}
              score={player.score}
              //isHighScore is an expression that returns true if a player's score is equal to the high score, and false if it's not
              isHighScore={player.score === highScore}
            />
          ))}
          <AddPlayerForm addPlayer={this.handleAddPlayer} />
        </div>
      </Provider>
    );
  }
}

export default App;
