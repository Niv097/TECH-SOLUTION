import "./style.css";
export default function Services() {
  return (
    <>
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-lg-start">
            <h1 className="display-5 fw-bold">Our Services</h1>
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
                    <div className="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4">
                      <i className="bi bi-globe"></i>
                    </div>
                    <h5 className="card-title">Web Design</h5>
                    <p className="card-text">
                      We design beautiful and responsive websites for our
                      clients.
                    </p>
                    <a className="btn btn-outline-dark" href="/pricing">
                      Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4">
                      <i className="bi bi-laptop"></i>
                    </div>
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      We develop fast and efficient web applications using the
                      latest technologies.
                    </p>
                    <a className="btn btn-outline-dark" href="/pricing">
                      Pricing
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
                    <h5 className="card-title">Android Development</h5>
                    <p className="card-text">
                      We build reliable and responssive apps for businesses.
                    </p>
                    <a className="btn btn-outline-dark" href="/pricing">
                      Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card h-100">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4">
                      <i className="bi bi-puzzle"></i>
                    </div>
                    <h5 className="card-title">Custom Solutions</h5>
                    <p className="card-text">
                      We create customized solutions to meet the specific needs
                      of our clients.
                    </p>
                    <a className="btn btn-outline-dark" href="/pricing">
                      Pricing
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
