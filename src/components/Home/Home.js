import React from "react";
import {Fade, Zoom} from "react-reveal";
import { Link } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";

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
              <div className="hero__ctaBtn fs--2">
                <Link to="/register">Get started</Link>
              </div>
            </div>
          </Fade>
        </div>
      </section>
      <About/>
      <Footer/>
    </>
  );
}

export default Home;