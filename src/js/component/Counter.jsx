import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";

function SimpleCounter(props) {
  return (
    <div className="bigCounter">
      <div className="calendar">
        <i className="far fa-clock fa-spin"></i>
      </div>
      <div className="four">{props.numberFour}</div>
      <div className="three">{props.numberThree}</div>
      <div className="two">{props.numberTwo}</div>
      <div className="one">{props.numberOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  numberOne: propTypes.number,
  numberTwo: propTypes.number,
  numberThree: propTypes.number,
  numberFour: propTypes.number,
};

export default SimpleCounter;
