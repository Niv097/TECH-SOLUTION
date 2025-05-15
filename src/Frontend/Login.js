import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      if (
        res.data.message === "Password didn't match" ||
        res.data.message === "User not registered"
      ) {
        alert(res.data.message);
        navigate("/login");
      } else {
        alert(res.data.message);
        setLoginUser(res.data.user);
        navigate("/");
      }
    });
  };

  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5">
              <div className="card-body">
                <h1 className="card-title text-center">Login</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your Email"
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Enter your Password"
                    />
                  </div>
                  <br></br>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={login}
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>or</p>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </div>
                <div className="text-center mt-3">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => navigate("/forgot")}
                  >
                    Forgot password?
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

export default Login;
