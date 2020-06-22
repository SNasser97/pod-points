import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
      <div className="container">
        <form className="form" action="" method="POST">
          <fieldset className="signin__header">
            <p className="signin__title fs--1">Sign up</p>
            <div className="signin__box fs--5">
              <label
                className="signin__label signin__label--fullname has_color--darkgrey4"
                htmlFor="fullname-reg"
              >
                Fullname
              </label>
              <input
                className="signin__input fs--4"
                name="fullname-reg"
                type="text"
                autoComplete="off"
                required
              />
              <hr className="signin__line" />
            </div>
            <div className="signin__box fs--5">
              <label
                className="signin__label signin__label--username has_color--darkgrey4"
                htmlFor="username-reg"
              >
                Username
              </label>
              <input
                className="signin__input fs--4"
                name="username-reg"
                type="text"
                autoComplete="off"
                required
              />
              <hr className="signin__line" />
            </div>
            <div className="signin__box fs--5">
              <label
                className="signin__label signin__label--email has_color--darkgrey4"
                htmlFor="email-reg"
              >
                Email
              </label>
              <input
                className="signin__input fs--4"
                name="email-reg"
                type="email"
                autoComplete="off"
                required
              />
              <hr className="signin__line" />
            </div>
            <div className="signin__box fs--5">
              <label
                className="signin__label signin__label--password has_color--darkgrey4"
                htmlFor="password-reg"
              >
                Password
              </label>
              <input
                className="signin__input fs--4"
                name="password-reg"
                type="password"
                autoComplete="off"
                required
              />
              <hr className="signin__line" />
            </div>
          </fieldset>
          <div className="signin__btn ">
            <input className="btn btn__full" type="submit" value="Sign Up" />
          </div>
          <div className="form__link fs--3">
            <Link to="/sign_in">
              Back to sign in
              <i className="fas fa-arrow-circle-right"></i>
            </Link>
          </div>
        </form>
        <div className="home fs--4">
          <Link to="/" >Go back</Link>
        </div>
      </div>
    </main>
  );
}

export default Register;