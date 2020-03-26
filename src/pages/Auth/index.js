import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { loginUrl } from "../../API";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isSubmitting) {
      return;
    }
    axios(loginUrl, {
      method: "post",
      data: {
        user: {
          email: "asasabahali@gmail.com",
          password: "asasabahali@gmail.com",
        },
      },
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Login</h1>
            <p className="text-xs-center">
              <Link to="register">Need an account?</Link>
            </p>
            <form onSubmit={e => handleSubmit(e)}>
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  ></input>
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  ></input>
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  type="submit"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
