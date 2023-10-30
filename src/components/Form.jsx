import React from "react";
import logo from "../Images/logo.svg"
import logo1 from "../Images/logo1.svg";



function Form({children,reverse}) {
  return (
    <div className='containera'>
      <img src={logo} className="medical" alt="medi" />
      <img src={logo1} className="medicals" alt="medik" />
      
        {children}
        {reverse}
    </div>
  );
}

export default Form;