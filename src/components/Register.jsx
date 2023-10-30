import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [BtnDisabled, setBtnDisabled] = useState(true);
  const [messageE, setMessage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [studentNumber, setStudentNumber] = useState("");
  const [isValidSN, setIsValidSN] = useState(true);

  const handleStudentNumberChange = (e) => {
    const inputSN = e.target.value;
    setStudentNumber(inputSN);
    setIsValidSN(/^2\d{1,6}$/.test(inputSN));
  };

  const handleInputChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    if (email === "") {
      setIsValidEmail(false);
      setBtnDisabled(true);
      setMessage("");
    } else if (email !== "") {
      setBtnDisabled(false);
      setMessage("Invalid emailid");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(inputEmail));
  };

  const handlePhoneNumberChange = (e) => {
    const inputPhoneNumber = e.target.value;
    setPhoneNumber(inputPhoneNumber);
    const phoneNumberRegex = /^\d{10}$/;
    setIsValidPhoneNumber(phoneNumberRegex.test(inputPhoneNumber));
  };

  return (
    <div className="log1">
      <form action="#">
        <h2 className="text1">HELLO!</h2>
        <h3 className="text2">Enter your information</h3>
        <div class="inputbox">
          <input type="text" placeholder="Enter Your Name" required />
          <div class="underline"></div>
        </div>
        <div class="input-box">
          <input
            type="text"
            placeholder="Enter Your Emailid"
            value={email}
            onChange={handleInputChange}
            required
          />

          <div class="underline"></div>
        </div>
        {!isValidEmail && <p className="error-message">{messageE}</p>}
        <div class="input-box">
          <input
            type="PhoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter Mobile Number"
            required
          />
          <div class="underline"></div>
        </div>
        {!isValidPhoneNumber && (
          <p className="error-message">Invalid Mobile number</p>
        )}
        <div class="input-box">
          <input
            type="StudentNumber"
            placeholder="Enter the Student Number"
            value={studentNumber}
            onChange={handleStudentNumberChange}
            required
          />
          <div class="underline"></div>
        </div>
        {!isValidSN && (
          <p className="error-message">Invalid Student Number</p>
        )}
        <div class="input-box button">
          <button type="Submit" disabled={BtnDisabled}>
            Sign up
          </button>
          <p>
            Already A User?{" "}
            <Link to="/login" className="link">
              Sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;