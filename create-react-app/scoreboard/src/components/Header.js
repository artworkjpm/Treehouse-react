import React from "react";
import PropTypes from "prop-types";
import Stats from "./Stats";
import Stopwatch from "./Stopwatch";

const Header = ({ totalPlayers, title }) => {
  return (
    <header>
      <Stats totalPlayers={totalPlayers} />
      <h1>{title}</h1>
      <Stopwatch />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  totalPlayers: PropTypes.arrayOf(PropTypes.object)
};

Header.defaultProps = {
  title: "Scoreboard"
};
export default Header;
