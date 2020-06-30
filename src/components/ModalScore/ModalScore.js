import React from "react";
import victorySound from "../../assets/audio/victorySound.mp3";
const ModalScore = ({reward, onClickCloseModal}) => {
  /*
    Pass payload value to display reward to user, 
    if points were to be afjusted we would change only the value in payload
  */
  // play sound effect when ModalScore is rendered.
  const soundEffect = new Audio(victorySound);
  soundEffect.play();

  return (
    <div className="modal">
      <div className="modal__wrapper">
        <div className="modal__star">
          <i className="fas fa-star"></i>
        </div>
        <div className="modal__star--2">
          <i className="fas fa-star"></i>
        </div>
        <p className="modal__praise fs--2">Awesome Job!</p>
        <p className="modal__reward fs--4">You've earned   
          <span className="modal__reward--scored">{reward}</span>
          points!
        </p>
        <button onClick={()=> onClickCloseModal()} className="btn btn__full modal__btn fs--4">Close
          <i className="far fa-thumbs-up"></i>
        </button>
      </div>
    </div>
  );
}

export default ModalScore;
