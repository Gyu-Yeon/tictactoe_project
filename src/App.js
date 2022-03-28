import logo from "./logo.svg";
import "./App.css";
import "./Detail.scss";
import { useState } from "react";

function App() {
  let [game, gameChange] = useState(
    [null, null, null],
    [null, null, null],
    [null, null, null]
  );
  return (
    <div className="App">
      <div className="Nav">
        <h1 className="title">Tic Tac Toe</h1>

        <div className="game-container">
          <GameBox />
        </div>
      </div>
    </div>
  );
}

function GameBox() {
  return (
    <div className="game-box">
      <div className="row1">
        <div
          className="cell1"
          onClick={() => {
            console.log(1);
          }}
        >
          {}
        </div>
        <div
          className="cell2"
          onClick={() => {
            console.log(2);
          }}
        ></div>
        <div
          className="cell3"
          onClick={() => {
            console.log(3);
          }}
        ></div>
      </div>
      <div className="row2">
        <div
          className="cell4"
          onClick={() => {
            console.log(4);
          }}
        ></div>
        <div
          className="cell5"
          onClick={() => {
            console.log(5);
          }}
        ></div>
        <div
          className="cell6"
          onClick={() => {
            console.log(6);
          }}
        ></div>
      </div>
      <div className="row3">
        <div
          className="cell7"
          onClick={() => {
            console.log(7);
          }}
        ></div>
        <div
          className="cell8"
          onClick={() => {
            console.log(8);
          }}
        ></div>
        <div
          className="cell9"
          onClick={() => {
            console.log(9);
          }}
        ></div>
      </div>
    </div>
  );
}
export default App;

// 플레이어 정하기.
// 플레이어1 턴에는 플레이어2가 클릭 금지. ( 클릭시 O 만 )
