import React from "react";
import TracklerLogo from "./TracklerLogo.png";

export default function Navbar() {
  return (
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              scr={TracklerLogo}
              alt="Trackler brand logo"
              height="24"
              className="d-inline-block align-text-top"
            ></img>
          </a>
        </div>
      </nav>
  );
}
