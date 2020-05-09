import React from "react";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <h1 className="hero__title fs--1">PodPoints Listen and earn!</h1>
          <div className="hero__cta">
            <div className="hero__ctaBtn fs--2">Get started</div>
          </div>
        </div>
      </section>
      <section className="section about">
        <div className="about__wrapper">
          <h3 className="about__title fs--1">How it works</h3>
          <div className="card__wrapper">
            <div className="card">
              <p className="card__title fs--2">Sign up!</p>
              <hr className="card__line" />
              <div className="card__icon">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card__next">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </div>
            <div className="card">
              <p className="card__title fs--2">Earn points!</p>
              <hr className="card__line" />
              <div className="card__icon">
                <i className="fas fa-star"></i>
              </div>
              <div className="card__next">
                <i className="fas fa-arrow-circle-right"></i>
              </div>
            </div>
            <div className="card">
              <p className="card__title fs--2">View your rank!</p>
              <hr className="card__line" />
              <div className="card__icon">
                <i className="fas fa-list-ol"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;