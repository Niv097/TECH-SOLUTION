import "./style.css";
import avatar from "./images/avatar-removebg-preview.png";
export default function About() {
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-3">
            <img src={avatar} alt="Niv" className="img-fluid" />
          </div>
          <div className="col-md-9">
            <h1 className="fw-bold">Niv</h1>
            <p className="lead">
              <em>
                Coder{" "}
                <a href="/">Marwadi University</a>
              </em>
            </p>
            <p className="mb-4">I am  Developer.</p>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row mb-5">
          <div className="col-md-6">
            <h2 className="fw-bold"> Programmer</h2>
            <ul>
              <li>Ongoing 6th Sem</li>
              <li>Project</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold">Work Experience</h2>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Dates</th>
                  <th scope="col">Work</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <div className="col-md-12">
            <h2 className="fw-bold">Skills</h2>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th scope="col">Category</th>
                  <th scope="col">Rating</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>.</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>.</td>
                  <td>⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>.</td>
                  <td>⭐⭐⭐⭐⭐</td>
                </tr>
                <tr>
                  <td>.</td>
                  <td>⭐⭐⭐</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <hr className="my-5" />
        <div className="row">
          <div className="col-md-12">
            <a href="/contact" className="btn btn-outline-dark me-2">
              Contact me
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
