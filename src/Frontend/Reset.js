import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [resetData, setResetData] = useState({
    email: "",
    key: "",
    newPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResetData({
      ...resetData,
      [name]: value,
    });
  };

  const resetPassword = () => {
    const { email, key, newPassword } = resetData;

    if (email && key && newPassword) {
      axios
        .post("http://localhost:9002/reset-password", resetData)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
          setMessage("An error occurred");
        });
    } else {
      alert("Invalid input");
    }
  };

  return (
    <div style={{ margin: "100px 0px 100px 0px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5 card-hover">
              <div className="card-body">
                <h1 className="card-title text-center">Reset Password</h1>
                <div className="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    name="email"
                    value={resetData.email}
                    className="form-control"
                    placeholder="Your Email"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Key:</label>
                  <input
                    type="text"
                    name="key"
                    value={resetData.key}
                    className="form-control"
                    placeholder="Reset Key"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>New Password:</label>
                  <input
                    type="password"
                    name="newPassword"
                    value={resetData.newPassword}
                    className="form-control"
                    placeholder="New Password"
                    onChange={handleChange}
                  />
                </div>
                <br></br>
                <div className="text-center">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={resetPassword}
                  >
                    Reset Password
                  </button>
                </div>
                <br></br>
                <div className="text-center mt-3">{message}</div>
                <div className="text-center mt-3">or</div>
                <div className="text-center mt-3">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
