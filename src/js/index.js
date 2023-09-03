//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import SimpleCounter from "./component/Counter";
// include your styles into the webpack bundle
import "../styles/index.css";

let counter = 0;
setInterval(function () {
  let four = Math.floor(counter / 1000) % 10;
  let three = Math.floor(counter / 100) % 10;
  let two = Math.floor(counter / 10) % 10;
  let one = Math.floor(counter / 1) % 10;
  ReactDOM.render(
    <SimpleCounter
      numberOne={one}
      numberTwo={two}
      numberThree={three}
      numberFour={four}
    />,
    document.querySelector("#app")
  );
  counter++;
}, 1000);
//render your react application
