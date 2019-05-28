import React, { PureComponent } from "react";
import { Consumer } from "./Context";
import PropTypes from "prop-types";
import Counter from "./Counter";
import Icon from "./Icon";

class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    index: PropTypes.number,
    id: PropTypes.number
  };
  render() {
    const { name, score, index, id, isHighScore } = this.props;
    return (
      <div className="player">
        <Consumer>
          {context => (
            <span className="player-name">
              <button
                className="remove-player"
                onClick={() => context.actions.removePlayer(id)}
              >
                ✖{" "}
              </button>
              <Icon isHighScore={isHighScore} />
              {name}
            </span>
          )}
        </Consumer>

        <Counter score={score} index={index} />
      </div>
    );
  }
}

export default Player;
