import React from "react";
import PropTypes from "prop-types";

function Match(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenMatchClicked(props.id)}>
        <h3>{props.summoner}</h3>
        <h3>{props.team} VS {props.opponent}</h3>
        <p><em>{props.role} {props.champion} {props.kills}/{props.deaths}/{props.assists}</em></p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Match.propTypes = {
  summoner: PropTypes.string,
  team: PropTypes.string,
  opponent: PropTypes.string,
  role: PropTypes.string,
  champion: PropTypes.string,
  kills: PropTypes.number,
  deaths: PropTypes.number,
  assists: PropTypes.number,
  whenMatchClicked: PropTypes.func
}

export default Match;