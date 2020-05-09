import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main>
      <div className="container">
        <form className="form" action="" method="POST">
          <fieldset className="signin__header">
            <p className="signin__title fs--1">Sign in</p>
            <div className="signin__box fs--5">
              <label
                className="signin__label signin__label--username has_color--darkgrey4"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="signin__input  fs--4"
                name="username"
                type="text"
                autoComplete="off"
                required
              />
              <hr className="signin__line" />
            </div>
            <div className="signin__box fs--5">
              <label
                className="signin__label signin__label--password has_color--darkgrey4"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="signin__input fs--4"
                name="password"
                type="password"
                autoComplete="off"
                required
              />
              <hr className="signin__line" />
            </div>
          </fieldset>
          <div className="signin__btn ">
            <Link to="/home">
              <input className="btn btn__full" type="submit" value="Sign In" />
            </Link>
          </div>
          <div className="form__link form__link--register fs--3">
            <Link to="/register">
              No account? Sign up!
              <i className="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </form>
        <div className="home fs--4">
          <Link to="/">Go back</Link>
        </div>
      </div>
    </main>
  );
}

export default SignIn;