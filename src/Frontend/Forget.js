import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const HandleForgotPassword = () => {
    axios
      .post("http://localhost:9002/forgot-password", { email })
      .then((response) => {
        if (response.data.message === "User not registered") {
          setMessage(response.data.message);
        } else {
          alert(response.data.message);
          navigate("/reset");
        }
      })
      .catch((error) => {
        console.error(error);
        setMessage("An error occurred.");
      });
  };

  return (
    <div style={{ margin: "100px 0px 100px 0px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5 card-hover">
              <div className="card-body">
                <h2 className="card-title text-center">Forgot Password</h2>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <br></br>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={HandleForgotPassword}
                  >
                    Send Reset Key
                  </button>
                </div>
                <br></br>
                <div className="text-center mt-3">{message}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
