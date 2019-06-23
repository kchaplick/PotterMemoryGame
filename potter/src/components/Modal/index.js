import React from "react";
// import "./style.css";

function Modal(props) {
  return (
    <div className="modal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => {
      props.gameReset()
    }}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>GAME OVER</p>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Modal;