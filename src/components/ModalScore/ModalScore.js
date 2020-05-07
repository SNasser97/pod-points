import React from "react";

const ModalScore = () => {

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__star">
          <i className="fas fa-star"></i>
        </div>
        <div className="modal__star--2">
          <i className="fas fa-star"></i>
        </div>
        <p className="modal__praise fs--3">Awesome Job!</p>
        <p className="modal__reward fs--4">You've earned   
          <span className="modal__reward--scored">{100}</span>
          points!
        </p>
        <button className="btn btn__full modal__btn fs--4">Close
          <i className="far fa-thumbs-up"></i>
          
        </button>
      </div>
    </div>
  );
}

export default ModalScore;
