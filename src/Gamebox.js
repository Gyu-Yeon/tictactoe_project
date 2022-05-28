import React from "react";

function GameBox(props) {
  return (
    <div className="game-box">
      <div className="row1">
        <div
          className="cell1"
          data-id="0"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[0]}</span>
        </div>
        <div
          className="cell2"
          data-id="1"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[1]}</span>
        </div>
        <div
          className="cell3"
          data-id="2"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[2]}</span>
        </div>
      </div>
      <div className="row2">
        <div
          className="cell4"
          data-id="3"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[3]}</span>
        </div>
        <div
          className="cell5"
          data-id="4"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[4]}</span>
        </div>
        <div
          className="cell6"
          data-id="5"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[5]}</span>
        </div>
      </div>
      <div className="row3">
        <div
          className="cell7"
          data-id="6"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[6]}</span>
        </div>
        <div
          className="cell8"
          data-id="7"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[7]}</span>
        </div>
        <div
          className="cell9"
          data-id="8"
          onClick={(e) => {
            props.marking(e.target.dataset.id);
          }}
        >
          <span className="marks">{props.mark[8]}</span>
        </div>
      </div>
    </div>
  );
}

export default GameBox;
