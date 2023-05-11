import React from "react";
import TracklerLogo from "./TracklerLogo.png";

export default function Navbar() {
  return (
    <div className="conatainer">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#app">
          <img scr={TracklerLogo} alt="Trackler brand logo"></img>
        </a>
        

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
           
          </div>
        </div>
      </nav>
    </div>
  );
}
