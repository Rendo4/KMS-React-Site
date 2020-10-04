import React from "react";
import PropTypes from "prop-types";

function MatchDetail(props) {
  const { match } = props;

  return (
    <React.Fragment>
      <h1> Match Detail</h1>
      <h3>{match.summoner}</h3>
      <p><em>{match.team} VS. {match.opponent}</em></p>
      <p><em>{match.champion} {match.kills}/{match.deaths}/{match.assists}</em></p>
      <hr/>
    </React.Fragment>
  );
}

MatchDetail.propTypes = {
  match: PropTypes.object
}

export default MatchDetail;