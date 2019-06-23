import React from "react";
import "./style.css";

function GuessCard(props) {
  return (
    <div className="card">
    {/* <span onClick={() => {
      props.handleCharacterClick(props.id)
    }}> */}
      <img alt={props.name} src="https://cdn.royalcanin-weshare-online.io/pCJJPmYBaxEApS7LeAbn/v1/ed7h-how-to-buy-a-puppy-hero-dog?w=1440&auto=compress&fm=jpg"/>
    {/* </span> */}
  </div>
  );
}

export default GuessCard;