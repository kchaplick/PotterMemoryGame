import React from "react";
import "./style.css";
import Instructions from "../Instructions"

function Score(props) {
  return (
    <div className="row">
      <div className="col-sm">
        <div className="jumbotron">
        <Instructions />
        <span>Current Score: {props.currentScore} </span>
        <span>Highest Score: {props.highestScore}</span>
        </div>
      </div>
    </div>
  );
}



export default Score;