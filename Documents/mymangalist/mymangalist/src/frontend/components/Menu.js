import React from "react";
import Welcome from "../assets/Welcome.png";
import { useHistory } from "react-router-dom";
import "../assets/Menu.css"
// import { useState } from "react";
/**
 * Defines the menu for this application.
 *
 * @returns {JSX.Element}
 */
function Menu() {
  const history = useHistory();

  const goToDashboard = () => {
    history.push("/dashboard");
  };

  return (
    <div className="Menu"> {/* Apply the Menu class here */}
      <header className="App-header">
        <img src={Welcome} alt="logo" />
        <button className="enter-button" onClick={goToDashboard}>
          Welcome Fellow Weeb!
        </button>
      </header>
    </div>
  );
}


export default Menu;

