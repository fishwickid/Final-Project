import React from "react";

export const Login = () => {
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="email-input"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="password-input"
          placeholder="Password"
        />
      </div>
      <button type="submit" className="btn btn-default">
        Login
      </button>
    </form>
  );
};

export default Login;
