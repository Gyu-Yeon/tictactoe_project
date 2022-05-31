import React from "react";

function Player(props) {
  return (
    <div>
      {props.player1state == true ? (
        <span>Player 1's Turn</span>
      ) : (
        <span>Player 2's Turn</span>
      )}
    </div>
  );
}

export default Player;
