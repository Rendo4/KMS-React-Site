import React from "react";
import Match from "./Match";
import PropTypes from "prop-types";


function MatchList(props){
  return(
    <React.Fragment>
     <hr/>
     {props.matchList.map((match) =>
     <Match 
      whenMatchClicked = { props.onMatchSelection }
      summoner={match.summoner}
      team={match.team}
      opponent={match.opponent}
      champion={match.champion}
      kills={match.kills}
      deaths={match.deaths}
      assists={match.assists}
      key={index}/>
      )}
    </React.Fragment>
  );
}

MatchList.propTypes = {
  matchList: PropTypes.array,
  onMatchSelection: PropTypes.func
};

export default MatchList;