import "./style.css";
export default function Home() {
  return (
    <>
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="">
            <h1 className="display-5 ">
              We provide solutions for your problems
            </h1>
            <p className=" mb-0"></p>
            <a className="btn btn-lg btn-outline-dark" href="/services">
              Get Started
            </a>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <div className="row gx-5">
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className=" bg-primary-soft text-primary mb-4">
                      <i className=""></i>
                    </div>
                    <h5>24/7 Support</h5>
                    <p className="card-text">Ask us anything at any time </p>
                    <a className="btn btn-outline-dark" href="/contact">
                      Support
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className="bg-primary-soft text-primary mb-4">
                      <i className=""></i>
                    </div>
                    <h5>High-Quality Services</h5>
                    <p className="card-text">
                      Our services are very reliable to our customers.We are
                      giving full assurance for work to our customers.
                    </p>
                    <a className="btn btn-outline-dark" href="/services">
                      Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className="bg-primary-soft text-primary mb-4">
                      <i className=""></i>
                    </div>
                    <h5>Affordable Prices</h5>
                    <p className="card-text">
                      Our services are very affordable to our customers.
                    </p>
                    <a className="btn btn-outline-dark" href="/pricing">
                      Pricing
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3 mb-5">
              <div className="card">
                <div className="card-body p-4">
                  <div className="text-center">
                    <div className="bg-primary-soft text-primary mb-4">
                      <i className=""></i>
                    </div>
                    <h5>Experience</h5>
                    <p className="card-text">
                      We have Experienced team they have better skills.
                    </p>
                    <a className="btn btn-outline-dark" href="/about">
                      About
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
