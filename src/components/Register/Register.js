import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  register,
  setRegUsername, 
  setRegEmail, 
  setRegPassword,
} from "../../redux/actions"

const mapStateToProps = (state) => {
  const {getRegPasswordText, getRegUsernameText, getRegEmailText} = state;
  return {
    emailFieldReg: getRegEmailText.emailFieldReg,
    usernameFieldReg: getRegUsernameText.usernameFieldReg,
    passwordFieldReg: getRegPasswordText.passwordFieldReg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegEmail: (e) => dispatch(setRegEmail(e.target.value)), 
    onRegUsername: (e) => dispatch(setRegUsername(e.target.value)),
    onRegPassword: (e) => dispatch(setRegPassword(e.target.value)),
    handleUserReg: (email,username,password) => dispatch(register(email, username, password))
  }
}

class Register extends Component  {
  // constructor(props) {
  //   super(props);
  // }

  handleRegValidation(message) {
    let outputMsg = "";
    //! prevents trying to pass and render an object in JSX
    if (typeof message === "object") {
      outputMsg = message.toString();
    } else {
      outputMsg = "Details registered but server could not process request. Try signing in instead"; // provides JSON parse error
    }
    
    if (message === 'insert into "Users" ("email", "id", "joined", "username") values ($1, $2, $3, $4) returning "id", "username" - duplicate key value violates unique constraint "users_email_key"' 
    || message === 'insert into "Users" ("email", "id", "joined", "username") values ($1, $2, $3, $4) returning "id", "username" - duplicate key value violates unique constraint "users_user_key"') {
      outputMsg = "User with such name or email already exists";
    } else if (message === "Please fill all fields") {
      outputMsg = message;
    }
    return (
      <p className="form__validationMsg">
        <span className="form__validationIcon"><i className="fas fa-exclamation-circle"></i></span>
        {outputMsg}
      </p>
    );
  }
  render() {
    const {
      onRegEmail, 
      onRegPassword, 
      onRegUsername,
      handleUserReg,
      emailFieldReg,
      usernameFieldReg,
      passwordFieldReg,
    } = this.props
    const { validReg, errorReg } = this.props // props passed from App
    return (
      <main>
        <div className="container">
          <form className="form" method="POST">
            <div className="form__validation">{validReg ? this.handleRegValidation(errorReg) : null}</div>
            <fieldset className="signin__header">
              <p className="signin__title fs--1">Sign up</p>
              <div className="signin__box fs--5">
                <label
                  className="signin__label signin__label--username has_color--darkgrey4"
                  htmlFor="username-reg"
                >
                  Username
              </label>
                <input
                  onChange={onRegUsername}
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
                  onChange={onRegEmail}
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
                  onChange={onRegPassword}
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
              <input onClick={(e)=> 
                {
                  handleUserReg(emailFieldReg ,usernameFieldReg ,passwordFieldReg ); 
                  e.preventDefault();
                }
              }
              className="btn btn__full" type="submit" value="Sign Up" />
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
}

// export default Register;
export default connect(mapStateToProps, mapDispatchToProps)(Register);