import React from "react";
import Legal from "../../assets/img/api-transparent.png";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__author fs--4">
        <p className="footer__authorName">
          Built by
          <a href="https://github.com/SNasser97" className="footer__github">
            Nasser <i className="fab fa-github"></i>
          </a>
        </p>
      </div>
      <div className="footer__legal">
        <figure className="footer__legalFigure">
          <a href="https://www.listennotes.com/">
            <img
              src={Legal}
              alt="Powered By ListenNotes Api"
              className="footer__legalImage"
            />
          </a>
        </figure>
      </div>
    </footer>
  );
}

export default Footer;