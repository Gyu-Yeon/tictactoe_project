import logo from "./logo.svg";
import "./App.css";
import "./Detail.scss";
import { useState } from "react";

function App() {
  let [turn, setTurn] = useState(0);
  let [mark, setMark] = useState([
    "", "", "",
    "", "", "",
    "", "", "",
  ]);

// const turnChange = ()=>{
//   if(turn === 0){
//     setMark((mark[] = "X"))
//     setTurn(1)
//   }else if(turn === 1){
//     setMark((mark[] = "O"))
//     setTurn(0)
//   }
// }

  return (
    <div className="App">
      <div className="Nav">
        <h1 className="title">Tic Tac Toe</h1>

        <div className="game-container">
          <GameBox mark={mark} turnChange={turnChange} />
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
          onClick={() => console.log(e.target.id)}> 
        <span className="marks">{props.mark[0]}</span>        
        </div>
        <div
          className="cell2"
          onClick={() => {
          props.turnChange()}}>
          <span className="marks">{props.mark[0][1]}</span>     
        </div>
        <div
          className="cell3"
          onClick={() => {
          props.turnChange()}}>
          <span className="marks">{props.mark[0][2]}</span>   
        </div>
      </div>
      <div className="row2">
        <div
          className="cell4"
          onClick={() => {
          props.turnChange()}}>
        <span className="marks">{props.mark[1][0]}</span>       
        </div>
        <div
          className="cell5"
          onClick={() => {
          props.turnChange()
          }}>
        <span className="marks">{props.mark[1][1]}</span>       
        </div>
        <div
          className="cell6"
          onClick={() => {
          props.turnChange()}}>
        <span className="marks">{props.mark[1][2]}</span>         
        </div>
      </div>
      <div className="row3">
        <div
          className="cell7"
          onClick={() => {
          props.turnChange()}}>
        <span className="marks">{props.mark[2][0]}</span>   
        </div>
        <div
          className="cell8"
          onClick={() => {
            props.turnChange()}}>
        <span className="marks">{props.mark[2][1]}</span>       
        </div>
        <div
          className="cell9"
          onClick={() => {
          props.turnChange()}}>
        <span className="marks">{props.mark[0][0]}</span>     
        </div>
      </div>
    </div>
  );
}
export default App;

// 플레이어 정하기.
// 플레이어1 턴에는 플레이어2가 클릭 금지. ( 클릭시 O 만 )
