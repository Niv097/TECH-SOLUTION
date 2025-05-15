import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-4">
        <div className="container text-md-left">
          <div className="row">

            <div className="col-lg-3 col-12">
              <h5 className="text-white mb-3">Solution Provider</h5>
              <p className="text-muted">
                We provide tech solutions for upscaling or upgrading your businesses.
              </p>
            </div>

            <div className="col-lg-3 col-12">
              <h5 className="text-white mb-3">Quick Links</h5>
              <ul className="list-unstyled">
                <li><a href="/" className="text-muted">Home</a></li>
                <li><a href="/services" className="text-muted">Services</a></li>
                <li><a href="/pricing" className="text-muted">Pricing</a></li>
                <li><a href="/about" className="text-muted">About Us</a></li>
                <li><a href="/contact" className="text-muted">Contact Us</a></li>
              </ul>
            </div>

            <div className="col-lg-3 col-12">
              <h5 className="text-white mb-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="text-muted">
                  <i className="bi bi-geo-alt-fill text-muted"></i> Gujarat
                </li>
                <li className="text-muted">
                  <i className="bi bi-telephone-fill text-muted"></i> +91 998822446677
                </li>
                <li className="text-muted">
                  <i className="bi bi-envelope-fill text-muted"></i> contact@example.com
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-12">
              <h5 className="text-white mb-3">Follow Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-muted">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-muted">
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-muted">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-muted">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="row">
            <div className="col text-center">
              <p className="text-muted mb-0 py-2">
                © RIGHTS RESERVED
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
