import React, { useState } from 'react';
import './SignUp.css';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [otpError, setOtpError] = useState(false);

  const handleSignUp = () => {
    if (!name) {
      setNameError(true);
      return;
    }
    if (!email) {
      setEmailError(true);
      return;
    }
    if (!phoneNumber) {
      setPhoneNumberError(true);
      return;
    }
    if (!otp) {
      setOtpError(true);
      return;
    }

    // Perform sign up logic if all fields are filled
  };

  return (
    <div className="outside-container">
      <div className="login">
        <div className="username-container">
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setNameError(false);
            }}
          />
          {nameError && <p className="error-message">Name is required</p>}
        </div>
        <div className="username-container">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
          />
          {emailError && <p className="error-message">Email is required</p>}
        </div>
        <div className="phoneNum-container">
          <input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
              setPhoneNumberError(false);
            }}
          />
          {phoneNumberError && (
            <p className="error-message">Phone Number is required</p>
          )}
          <button className="practice-button text">Send OTP</button>
        </div>
        <div className="username-container">
          <input
            placeholder="OTP"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
              setOtpError(false);
            }}
          />
          {otpError && <p className="error-message">OTP is required</p>}
        </div>
        <button className="practice-button text" onClick={handleSignUp}>
          Sign Up
        </button>
        <p className="para">
          Already have an account?{' '}
          <span className="spann">Log In</span>
        </p>
      </div>
    </div>
  );
}
