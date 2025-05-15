import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Header.js";
import Home from "./Home.js";
import Services from "./Services.js";
import Pricing from "./Pricing.js";
import About from "./About.js";
import Contact from "./Contact.js";
import Login from "./Login.js";
import Signup from "./Signup.js";
import Product from "./Product.js";
import Footer from "./Footer.js";
import ForgotPassword from "./Forget.js";
import ResetPassword from "./Reset.js";
function Main() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };
  console.log(loggedIn);

  return (
    <Router>
      <Header loggedIn={loggedIn} username={username} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            loggedIn ? (
              <Navigate to="/" />
            ) : (
              <Login setLoginUser={handleLogin} />
            )
          }
        />
        <Route path="/register" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Main;
