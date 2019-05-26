import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    id: PropTypes.number
  };
  render() {
    const { removePlayer, name, score, changeScore, index, id, isHighScore } = this.props;
    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>
            ✖{" "}
          </button>
          <Icon isHighScore={isHighScore} />
          {name}
        </span>

        <Counter score={score} changeScore={changeScore} index={index} />
      </div>
    );
  }
}

export default Player;
