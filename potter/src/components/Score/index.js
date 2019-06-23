import React from "react";
import "./style.css";
import Instructions from "../Instructions"

function Score(props) {
  return (
    <div className="row">
      <div className="col-sm">
        <div className="jumbotron text-center">
        <Instructions />
        <span className="currentScore">Current Score: {props.currentScore} </span>
        <span className="highestScore">Highest Score: {props.highestScore}</span>
        </div>
      </div>
    </div>
  );
}



export default Score;