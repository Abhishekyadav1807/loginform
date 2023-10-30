import React from "react";
import logo from "../Images/logo.svg";
import logo1 from "../Images/logo1.svg";
import Register from "./Reg";

function Reg({reverse }) {
  return (
    <div className="main">
      <div className="containerb">
        <img src={logo} className="medical" alt="medi"/>
        <img src={logo1} className="medicals" alt="medik" />

        <Register />

      </div>
      </div>
  );
}

export default Reg;