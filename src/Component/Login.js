import React, { useState } from 'react';
import {Link,useNavigate} from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [rollNumberError, setRollNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate(); 

  const validateRollNumber = (value) => {
    const rollNumberPattern = /^\d{1,7}$/;
    if (!value.match(rollNumberPattern)) {
      setRollNumberError('Maximum of 7 digits.');
    } else {
      setRollNumberError('');
    }
  };

  // Function to validate Password based on a regular expression
  const validatePassword = (value) => {
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!value.match(passwordPattern)) {
      setPasswordError('Password: At least 6 characters, one uppercase letter, one number, and one special character.');
    } else {
      setPasswordError('');
    }
  };

  // Event handler for Roll Number input change
  const handleRollNumberChange = (e) => {
    const value = e.target.value;
    setRollNumber(value);
    validateRollNumber(value);
  };

  // Event handler for Password input change
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  // Event handler for Login button click
  const handleLogin = () => {
    // Perform additional authentication logic if needed
    console.log('Authentication Successful!');
    alert('Login Successful');
    navigate("/Dashboard");
  };

  return (
      <div className="outer-container">
        <div className="container">
          <div className="form-container log-in-container">
            <form>
              <h1>Login</h1>
              {/* Roll Number input with continuous validation */}
              <input
                type="number"
                placeholder="Roll Number"
                value={rollNumber}
                onChange={handleRollNumberChange}
              />
              {rollNumberError && <p className="error-message">{rollNumberError}</p>}
  
              {/* Password input with continuous validation */}
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              {passwordError && <p className="error-message">{passwordError}</p>}
  
               <Link to="/ForgotPassword">Forgot Password</Link>
              <label>
                Not a Member? <a href="#">Sign Up</a>
              </label>
  
              {/* Login button with conditional disabling based on validation errors */}
              <button type="button" onClick={handleLogin} disabled={!!rollNumberError || !!passwordError}>
                Login
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-right">
                <h1>HouseKeeper Scheduling system</h1>
                <p>This is the place where you can schedule your comfortable time for cleaning purposes for HouseKeeper.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
