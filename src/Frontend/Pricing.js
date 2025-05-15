import "./style.css";
import support from "./images/online_support.png";
export default function Pricing() {
  return (
    <>
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-lg-start">
            <h1 className="display-5 fw-bold">Pricing</h1>
            <p className="lead fw-normal mb-0">
              Choose a plan that fits your needs
            </p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row gx-5">
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className=" bg-primary-soft text-primary mb-4">
                      <i className="bi bi-globe"></i>
                    </div>
                    <h5 className="card-title">Web Design</h5>
                    <p className="card-text">Starting at $500</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Custom design
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Responsive layout
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>{" "}
                        Up to 5 pages
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Contact form
                      </li>
                    </ul>
                    <a href="/product" className="btn btn-outline-dark mt-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className=" bg-primary-soft text-primary mb-4">
                      <i className="bi bi-laptop"></i>
                    </div>
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">Starting at $1000</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Custom development
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Responsive design
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>{" "}
                        CMS integration
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        E-commerce integration
                      </li>
                    </ul>
                    <a href="/product" className="btn btn-outline-dark mt-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className=" bg-primary-soft text-primary mb-4">
                      <i className="bi bi-phone"></i>
                    </div>
                    <h5 className="card-title">Mobile App Development</h5>
                    <p className="card-text">Starting at $1500</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Native development
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Cross-platform development
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Responsive design
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Backend integration
                      </li>
                    </ul>
                    <a href="/product" className="btn btn-outline-dark mt-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className=" bg-primary-soft text-primary mb-4">
                      <img src={support} alt="error" />
                    </div>
                    <h5 className="card-title">Maintenance</h5>
                    <p className="card-text">Starting at $250/month</p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Website updates
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>{" "}
                        Bug fixes
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>
                        Security updates
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary"></i>{" "}
                        24/7 support
                      </li>
                    </ul>
                    <a href="/product" className="btn btn-outline-dark mt-3">
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
