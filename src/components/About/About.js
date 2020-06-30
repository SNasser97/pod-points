import React from "react";
import {Fade, Rotate} from "react-reveal";
const About = () => {

  return (
    <section className="section about">
      <div className="about__wrapper">
        <h3 className="about__title fs--1">How it works</h3>
        <div className="card__wrapper">
          <Fade up>
            <div className="card" style={{ zIndex: 3 }}>
              <p className="card__title fs--2">Sign up!</p>
              <hr className="card__line" />
              <Rotate>
                <div className="card__icon">
                  <i className="fas fa-user-plus"></i>
                </div>
              </Rotate>
              <div className="card__next">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </div>
          </Fade>
          <Fade down>
            <div className="card" style={{ zIndex: 2 }}>
              <p className="card__title fs--2">Earn points!</p>
              <hr className="card__line" />
              <Rotate>
                <div className="card__icon">
                  <i className="fas fa-star"></i>
                </div>
              </Rotate>
              <div className="card__next">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </div>
          </Fade>
          <Fade up>
            <div className="card">
              <p className="card__title fs--2">View your rank!</p>
              <hr className="card__line" />
              <Rotate>
                <div className="card__icon">
                  <i className="fas fa-list-ol"></i>
                </div>
              </Rotate>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default About;