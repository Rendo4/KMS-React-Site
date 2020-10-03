import React from "react";

function Player(){
  const summoner = "Theroclease";
  const team = "GURL";
  const opponent = "TAS";
  const role = "ADC";
  const champion = "Caitlyn";
  const kills = "14";
  const deaths = "5";
  const assists = "9";
  return (
    <React.Fragment>
      <h3>{summoner}</h3>
      <h3>{team} VS {opponent}</h3>
      <p><em>{role} {champion} {kills}/{deaths}/{assists}</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default Player;