import React from "react";
import pizzalogo from "../../assets/pizza logo.png";
import "./header.css";

const Header = () => {
  return (
    <div className="headerdiv">
      <img src={pizzalogo} alt="logo" className="pizzalogo" />
      <h3 className="headertext">pizza customisation</h3>
    </div>
  );
};

export default Header;
