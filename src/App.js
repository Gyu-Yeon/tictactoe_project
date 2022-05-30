import logo from "./logo.svg";
import "./App.css";
import "./Detail.scss";
import Gamebox from "./Gamebox";
import { useEffect, useState, useToggle } from "react";
import Alert from "./Alert";

function App() {
  let [done, setDone] = useState(0);
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
    console.log("hi");
    // if (mark[a] == null) {
    //   if (turn === true && mark[a] == null) {
    //     newMark[a] = "X";
    //     setMark(newMark);
    //   } else if (turn === false) {
    //     newMark[a] = "O";
    //     setMark(newMark);
    //   }
    //   setTurn(!turn);
    // } else if (mark[a] != null) {
    //   setPlaced(true);
    // }
  };

  useEffect(() => {
    let a = setTimeout(() => {
      setPlaced(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, [placed]);

  return (
    <div className="App">
      <div className="Nav">
        <h1 className="title">Tic Tac Toe</h1>
        {placed == true ? <Alert /> : null}
        <div className="game-container">
          <Gamebox mark={mark} marking={marking} />
        </div>
      </div>
    </div>
  );
}

export default App;

// 플레이어 정하기.
// 플레이어1 턴에는 플레이어2가 클릭 금지. ( 클릭시 O 만 )

// 플레이어1 , 플레이어2 ,
