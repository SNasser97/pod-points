import React from "react";
import svg from "../../assets/img/temp.svg";
import {Fade, Zoom} from "react-reveal";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <Zoom>
            <h1 className="hero__title fs--1">PodPoints Listen and earn!</h1>
          </Zoom>
          <Fade up>
            <div className="hero__cta">
              <div className="hero__ctaBtn fs--2">Get started</div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}

export default Home;