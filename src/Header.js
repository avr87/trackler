import React from "react";
import "./Header.css";
import Todo from "./todo.png";
import ProfileTom from "./profileTom.png";
import Forms from "./Forms.png";
import PlusButton from "./plus-button.png";
import ProfileCaroline from "./profileCaroline.png";
import Tick from "./Vector.png";
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
              <div className="gratis-proberen">
                <button
                  type="button"
                  className="btn btn-primary btn-gratis"
                  data="Gratis proberen"
                ></button>
                <div className="proefperiode">
                  <img src={Tick} alt="green tick" className="green-tick"></img>{" "}
                  <span>14 dagen gratis proefperiode</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="boek-een-demo">
                <button
                  type="button"
                  className="btn btn-primary  btn-demo"
                  data="Boek een demo"
                ></button>
                <div className="voorgaande-gebruikers">
                  <img src={Tick} alt="green tick" className="green-tick"></img>{" "}
                  <span>200+ gebruikers gingen je voor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className="text-box1">
            <p>
              Dag Jane, ik hoop dat het goed met je gaat vandaag. Je bent goed
              aan het groeien, let’s keep at it!
            </p>
          </div>
          <div className="profileTom">
            <img src={ProfileTom} alt="Profile of Tom"></img>
          </div>
          <div className="screenshot-todo">
            <img src={Todo} alt="Example of the to do list"></img>
          </div>
          <div className="screenshot-forms">
            <img src={Forms} alt="Example of the forms"></img>
            <div className="plus-button">
              <img src={PlusButton} alt="add-button"></img>
            </div>
          </div>
          <div className="text-box2">
            <p>Dag Tom, bedankt voor je berichtje. Zeker, het gaat goed!</p>
          </div>
          <div className="profileCaroline">
            <img src={ProfileCaroline} alt="Profile of Caroline"></img>
          </div>
        </div>
      </div>
    </header>
  );
}
