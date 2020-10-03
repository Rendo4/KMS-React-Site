import React from "react";
import PropTypes from "prop-types";

function Player(props){
  return (
    <React.Fragment>
      <h3>{props.summoner}</h3>
      <h3>{props.team} VS {props.opponent}</h3>
      <p><em>{props.role} {props.champion} {props.kills}/{props.deaths}/{props.assists}</em></p>
      <hr/>
    </React.Fragment>
  );
}

Player.propTypes = {
  summoner: PropTypes.string,
  team: PropTypes.string,
  opponent: PropTypes.string,
  role: PropTypes.string,
  champion: PropTypes.string,
  kills: PropTypes.number,
  deaths: PropTypes.number,
  assists: PropTypes.number
}

export default Player;