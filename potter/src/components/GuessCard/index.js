import React from "react";
import "./style.css";

function GuessCard(props) {
  return (
    <div className="col-sm-4 text-center"onClick={() => {
      props.handleCharacterClick(props.id)
    }}>
      <img className="icons img-responsive" alt={props.name} src={props.image}/>
  </div>
  );
}

export default GuessCard;