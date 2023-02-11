import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./App.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1",
    },
    {
      username: "user2",
      password: "pass2",
    },
  ];

  const errors = {
    uname: "Username Salah",
    pass: "Password Salah",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // comparasi user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code untuk error message
  const renderErrorMessage = (name) => name === errorMessages.name && <div className="error">{errorMessages.message}</div>;

  // JSX code untuk login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username: </label>
          <input type="text" name="uname" placeholder="Masukan Username" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password: </label>
          <input type="password" name="pass" placeholder="Masukan Password" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div class="title-me">
        <h1>
          Welcome Kak <span class="wisnu">Wisnu</span>
        </h1>
      </div>
      <div className="login-form">
        <div className="title">LOGIN</div>
        {isSubmitted ? (
          <div className="success">
            <span class="material-symbols-outlined done">done</span> Sukses Login
          </div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default App;
