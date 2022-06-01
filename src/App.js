import logo from "./logo.svg";
import "./App.css";
import "./Detail.scss";
import Gamebox from "./Gamebox";
import { useEffect, useState, useToggle } from "react";
import Alert from "./Alert";
import Who from "./Who";

function App() {
  let [turn, setTurn] = useState(true);
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
  let [placed, setPlaced] = useState(false);
  let [player1state, setPlayer1state] = useState(true);
  let [player2state, setPlayer2state] = useState(false);

  let newMark = [...mark];
  const marking = (a) => {
    if (mark[a] !== null) {
      return setPlaced(true);
    }
    if (turn === true && mark[a] === null) {
      newMark[a] = "X";
      setMark(newMark);
    } else if (turn === false && mark[a] == null) {
      newMark[a] = "O";
      setMark(newMark);
    }
    setTurn(!turn);
    setPlayer1state(!player1state);
    setPlayer2state(!player2state);
  };

  useEffect(() => {
    let a = setTimeout(() => {
      setPlaced(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, [placed]);

  const gameSet = () => {
    if (mark[0] == "X" && mark[1] == "X" && mark[2] == "X") {
    }
  };

  return (
    <div className="App">
      <div className="Nav">
        <h1 className="title">Tic Tac Toe</h1>
        {placed == true ? <Alert /> : null}
        <Who
          player1state={player1state}
          setPlayer1state={setPlayer1state}
          player2state={player2state}
        />
        <End />
        <div className="game-container">
          <Gamebox mark={mark} marking={marking} />
        </div>
      </div>
    </div>
  );
}

function End() {
  return (
    <div>
      <p>Player 1 Won!!!</p>
      <button>Again</button>
    </div>
  );
}

export default App;

// 플레이어 정하기.
// 플레이어1 턴에는 플레이어2가 클릭 금지. ( 클릭시 O 만 )

// 플레이어1 , 플레이어2 ,
