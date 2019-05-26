import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";

class Player extends PureComponent {
  static PropTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    id: PropTypes.number
  };
  render() {
    const { removePlayer, name, score, changeScore, index, id } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖
          </button>
          {name}
        </span>

        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
