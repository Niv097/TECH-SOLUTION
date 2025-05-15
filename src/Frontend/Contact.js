import React, { useState } from "react";
import axios from "axios";
import "./style.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    profession: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9002/contact", formData)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("An Error occured");
      });
  };

  return (
    <>
      <header class="bg-light py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-lg-start">
            <h1 class="display-5 fw-bold">Contact Us</h1>
            <p class="lead fw-normal mb-0">We would love to hear from you!</p>
          </div>
        </div>
      </header>
      <div style={{ margin: "0px 0px 100px 0px" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mt-5 card-hover">
                <div className="card-body">
                  <h1 className="card-title text-center">Contact us</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label className="text-blk input-title">USERNAME</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-blk input-title">SUBJECT</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-blk input-title">EMAIL</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-blk input-title">PROFESSION</label>
                      <input
                        type="text"
                        name="profession"
                        value={formData.profession}
                        className="form-control"
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="text-blk input-title">
                        WHAT DO YOU HAVE IN MIND
                      </label>
                      <textarea
                        className="form-control textinput"
                        name="message"
                        placeholder="Please enter query..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <br></br>
                    <div className="text-center">
                      <button type="submit" className="btn btn-outline-dark">
                        Send Message
                      </button>
                    </div>
                    <br></br>
                    <div className="text-center mt-3">{message}</div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
