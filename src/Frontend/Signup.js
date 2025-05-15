import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    profession: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, profession, password, reEnterPassword } = user;
    if (
      name &&
      email &&
      profession &&
      password &&
      password === reEnterPassword
    ) {
      axios.post("http://localhost:9002/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Any of the field is empty or passwords didn't match");
    }
  };

  return (
    <div style={{ marginTop: "100px", marginBottom: "100px" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card mt-5 card-hover">
              <div className="card-body">
                <h1 className="card-title text-center">Register</h1>
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={user.name}
                      className="form-control"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      className="form-control"
                      placeholder="Your Email"
                      onChange={handleChange}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="profession">Profession</label>
                    <input
                      type="text"
                      name="profession"
                      value={user.profession}
                      className="form-control"
                      placeholder="Your Profession"
                      onChange={handleChange}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="password">Passwordl</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      className="form-control"
                      placeholder="Your Password"
                      onChange={handleChange}
                    />
                  </div>
                  <br></br>
                  <div className="form-group">
                    <label htmlFor="reEnterPassword">Re Enter Password</label>
                    <input
                      type="password"
                      name="reEnterPassword"
                      value={user.reEnterPassword}
                      className="form-control"
                      placeholder="Re-enter Password"
                      onChange={handleChange}
                    />
                  </div>
                  <br></br>
                  <div className="text-center">
                    <button
                      type="button"
                      className="btn btn-outline-dark"
                      onClick={register}
                    >
                      Register
                    </button>
                  </div>
                </form>
                <div className="text-center mt-3">
                  <p>or</p>
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
export default Signup;
