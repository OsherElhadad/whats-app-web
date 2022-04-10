import { Link } from "react-router-dom";
import SignUp from "./SignUp";

function LogIn() {
  return (
    <section className="vh-60">
      <div className="container py-5 h-60">
        <div className="row d-flex justify-content-center align-items-center h-60">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">

                <div className="mb-md-5 mt-md-4 pb-5">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter your user name and password!</p>

                  <div className="form-floating form-white text-dark mb-4">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Username" required autoFocus />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating form-white text-dark mb-4">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                  <p><button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button></p>

                  <p>Don't have an account? <Link to ="/signup" className="text-white-50 fw-bold">Sign Up</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogIn;