import "./style.css";

export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-dark">
        <div className="container px-4 px-lg-5">
          <div className="row gx-5">
            <div className="col-lg-3 col-12">
              <h5 className="text-white mb-3">Solution Provider</h5>
              <p className="text-muted">
                We provide tech solutions for upscaling or upgrading your
                businesses
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
                  <i className="bi bi-geo-alt-fill text-muted"> Gujarat</i>
                </li>
                <li className="text-muted">
                  <i className="bi bi-telephone-fill text-muted"></i> +91 998822446677
                </li>
                <li>
                  <i className="bi bi-envelope-fill text-muted"></i>{" "}
                  <a
                    href="mailto:contact@solutionprovider.com"
                    className="text-muted"
                  >
                    niv@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-12">
              <h5 className="text-white mb-3">Connect with Us</h5>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-link text-muted p-0"
                    aria-label="Facebook"
                    onClick={() => {}}
                  >
                    <i className="bi bi-facebook"></i>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-link text-muted p-0"
                    aria-label="Twitter"
                    onClick={() => {}}
                  >
                    <i className="bi bi-twitter"></i>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-link text-muted p-0"
                    aria-label="Instagram"
                    onClick={() => {}}
                  >
                    <i className="bi bi-instagram"></i>
                  </button>
                </li>
                <li className="list-inline-item">
                  <button
                    type="button"
                    className="btn btn-link text-muted p-0"
                    aria-label="LinkedIn"
                    onClick={() => {}}
                  >
                    <i className="bi bi-linkedin"></i>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
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