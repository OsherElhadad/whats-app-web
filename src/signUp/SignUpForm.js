import { Link } from "react-router-dom";

function signUpForm(props) {
    return(
        <section className="vh-60">
      <div className="container py-5 h-60">
        <div className="row d-flex justify-content-center align-items-center h-60">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <h6>Please Fill Your Info!</h6>
                  <br></br>

                  <form id="signUpForm" noValidate>
                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={props.name} id="SignUpUsername" type="text" placeholder="Enter Username" className="form-control" autoFocus />
                      <label htmlFor="SignUpUsername" className="form-label">Username</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="usernameInvalidFeedback" className="invalid-feedback"></div>
                    </div>

                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={props.pass} id="SignUpPassword" type="password" placeholder="Enter Password" className="form-control" />
                      <label htmlFor="SignUpPassword" className="form-label">Password</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="passwordInvalidFeedback" className="invalid-feedback"></div>
                    </div>

                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={props.rePass} id="SignUpRePassword" type="password" placeholder="Re-Enter Password" className="form-control" />
                      <label htmlFor="SignUpRePassword" className="form-label">Verify Password</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="rePasswordInvalidFeedback" className="invalid-feedback"></div>
                    </div>

                    <div className="form-floating form-white text-dark mb-4">
                      <input ref={props.nick} id="SignUpNickname" type="text" placeholder="Enter Nickname" className="form-control" />
                      <label htmlFor="SignUpNickname" className="form-label">Nickname</label>
                      <div className="valid-feedback">
                        Looks good!
                      </div>
                      <div id="nicknameInvalidFeedback" className="invalid-feedback">
                        Please choose a password.
                      </div>
                    </div>

                    <div className="mb-3">
                      {!props.file && (
                        <div>
                          <input id="SignUpProfilePic" className="form-control" type="file" accept="image/*" onChange={props.fileUpload}></input>
                          <label htmlFor="SignUpProfilePic" >Profile Picture</label>
                        </div>
                      )}

                      {props.file && (
                        <div id="ProfilePicHolder">
                          <img id="SignUpProfilePicImg" src={props.file}></img>
                          <button id="closeBtn" className="btn btn-danger btn-circle btn-sm" onClick={props.removePicture}>X</button>
                        </div>
                      )}
                    </div>

                    <button id="signUpButton" className="btn btn-outline-light btn-lg px-5" type="submit" disabled>Sign-Up</button>

                  </form>
                  <br></br>
                </div>
                <div>
                  <span className="mb-0">Already Signed? &nbsp;</span>
                  <Link to="/" className="text-white-50 fw-bold">Log-In</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}

export default signUpForm;