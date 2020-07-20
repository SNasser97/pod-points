import React from "react";
import Loader from "../Loader/Loader";

const LoaderForm = ({showLoader}) => {
  if (showLoader) {
    return (
      <div className="loader-container" style={{ height: "auto" }}>
        <div className="lds-ripple" >
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
  return null;
}

export default LoaderForm;