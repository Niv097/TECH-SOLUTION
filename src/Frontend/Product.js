import React, { useState } from "react";
import axios from "axios";
import "./style.css";

export default function Product() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: [], // Initialize service as an array to hold multiple selections
    message: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, options, type } = e.target;

    // Check if options is defined before attempting to use it
    const selectedOptions =
      options &&
      Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value);

    // Set the value based on the input type
    const inputValue = type === "select-multiple" ? selectedOptions : value;

    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9002/product", formData)
      .then((response) => {
        console.log(response.data);
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        setMessage("An Error occurred");
      });
  };

  return (
    <>
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-lg-start">
            <h1 className="display-5 fw-bold">Selection</h1>
            <p className="lead fw-normal mb-0">
              Choose a plan that fits your needs
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    className="form-control"
                    id="inputName"
                    placeholder="Your Name"
                    onChange={handleChange}
                    name="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    className="form-control"
                    id="inputEmail"
                    placeholder="you@example.com"
                    onChange={handleChange}
                    name="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="services" className="form-label">
                    Which services do you want to take?
                  </label>
                  <select
                    className="form-select"
                    id="services"
                    multiple
                    required
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="web_design">Web Design</option>
                    <option value="web_development">Web Development</option>
                    <option value="android_development">
                      Android Development
                    </option>
                    <option value="maintenance">Maintenance</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    className="form-control ta"
                    id="inputMessage"
                    rows="5"
                    placeholder="Your Message"
                    onChange={handleChange}
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="d-grid">
                  <button type="submit" className="btn btn-outline-dark btn-lg">
                    Submit
                  </button>
                </div>
              </form>
              <div className="text-center mt-3">{message}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
