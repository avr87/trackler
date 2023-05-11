import React from "react";
import Womanwithlaptop from "./womanwithlaptop.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="boxes">
        <div className="box-1">
          <div className="title">
            <h1>
              De toekomst van <span className="coaching">coaching</span> begint
              hier!
            </h1>
            <p>
              Organiseer eenvoudig je coachingstrajecten, maak gebruik van
              krachtige coachingtools en til je coachingspraktijk of organisatie
              naar een hoger niveau.
            </p>
          </div>
          <div className="row">
            <div className="col-6">
              <button type="button" className="btn btn-primary">
                Gratis propberen
              </button>
            </div>
            <div className="col-6">
              <button type="button" className="btn btn-primary">
                Boek een demo
              </button>
            </div>
            </div>
          </div>
          <div className="box-2 womanWithLaptop">
            <img src={Womanwithlaptop} alt="Woman working on a laptop" className="img-fluid"></img>
          </div>
        </div>
      
    </header>
  );
}
