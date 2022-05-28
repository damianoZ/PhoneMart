import React from 'react';

const Login = () => {

  return (
    <>
      <button type="button" className="btn" style={{color: "whitesmoke", fontSize:"120%", letterSpacing: "2px"}} data-bs-toggle="modal" data-bs-target="#loginModal">
        <span className='fa fa-sign-in me-1'></span><b>Login</b></button>
      <div className="modal fade" id="loginModal" data-bs-backdrop="false" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="loginModalLabel">Login</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <button type="button" className="btn btn-dark w-100 mb-4"><span className='fa fa-google me-2'></span>Sign in With Google</button>
              <button type="button" className="btn btn-dark w-100 mb-4"><span className='fa fa-facebook me-2'></span>Sign in With Facebook</button>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                  <label className="form-check-label mb-2" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-dark w-100 mb-2">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
