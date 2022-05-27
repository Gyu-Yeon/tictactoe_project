import logo from "./logo.svg";
import "./App.css";
import "./Detail.scss";
import { useState } from "react";

function App() {
  let [done, setDone] = useState(0);
  let [turn, setTurn] = useState(0);
  let [mark, setMark] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const marking = (a) => {
    if (done === 8) {
      if (mark[0] && mark[1] && mark[1]) {
      }
    }
    let newMark = [...mark];
    if (turn === 0) {
      newMark[a] = "X";
      setMark(newMark);
      setTurn(1);
      console.log(newMark);
    } else if (turn === 1) {
      newMark[a] = "O";
      setMark(newMark);
      setTurn(0);
    }
    done++;
  };

  return (
    <div className="App">
      <div className="Nav">
        <h1 className="title">Tic Tac Toe</h1>

        <div className="game-container">
          <GameBox mark={mark} marking={marking} />
        </div>
      </div>
    </div>
  );
}

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
export default App;

// 플레이어 정하기.
// 플레이어1 턴에는 플레이어2가 클릭 금지. ( 클릭시 O 만 )
