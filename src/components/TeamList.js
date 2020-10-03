import React from "react";
import Player from "./Player";

const masterTeamList = [
  {
    summoner: "Theroclease",
    team: "GURL",
    opponent: "TAS",
    role: "ADC",
    champion: "Caitlyn",
    kills: 14,
    deaths: 5,
    assists: 9
  },
  {
    summoner: "Theroclease",
    team: "GURL",
    opponent: "YUP",
    champion: "Jinx",
    kills: 15,
    deaths: 2,
    assists: 8
  },
  {
    summoner: "Theroclease",
      team: "GURL",
      opponent: "DD",
      champion: "Ezreal",
      kills: 11,
      deaths: 1,
      assists: 12
  }
]
function PlayerList(){
  return(
    <React.Fragment>
     <hr/>
     {masterTeamList.map((player,index) =>
     <Player summoner={player.summoner}
        team={player.team}
        opponent={player.opponent}
        champion={player.champion}
        kills={player.kills}
        deaths={player.deaths}
        assists={player.assists}
        key={index}/>
        )}
    </React.Fragment>
  );
}

export default PlayerList;