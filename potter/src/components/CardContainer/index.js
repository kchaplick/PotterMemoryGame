import React from "react";
import "./style.css";

function CardContainer(props) {
  return (
    <div className="row">
      
      {props.children}
      
    </div>
  )
}

export default CardContainer;