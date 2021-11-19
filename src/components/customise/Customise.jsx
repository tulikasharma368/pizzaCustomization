import React from "react";
import "./customise.css";
import Header from "../header/Header";
import pizzabase from "../../assets/PizzaBase.png";
import cheese from "../../assets/BaseCheese.png";
import tomato from "../../assets/Tomato.png";
import olive from "../../assets/Olive.png";
import mushroom from "../../assets/Mushroom.png";
import basil from "../../assets/Basil.png";
import pineapple from "../../assets/Pineapple.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const Customise = (props) => {
  let navigate = useNavigate();

  const changestate = (name, event) => {
    let newingreds = JSON.parse(JSON.stringify(props.ingredients));
    // console.log(newingreds);
    console.log(event.target.checked);
    newingreds[name] = event.target.checked;
    props.setingredients(newingreds);
    localStorage.setItem("ingredients", JSON.stringify(newingreds));
  };

  return (
    <div>
      <Header />
      <div className="customise">
        <div>
          <h1 className="build">Build your own pizza</h1>
          <img src={pizzabase} alt="" className="pizzabase" />
          {/* <Cheese /> */}
          {props.ingredients["cheese"] ? (
            <img className="cheeseimg" src={cheese} alt="" />
          ) : (
            <></>
          )}
          {props.ingredients["tomato"] ? (
            <img className="tomatoimg" src={tomato} alt="" />
          ) : (
            <></>
          )}
          {props.ingredients["olive"] ? (
            <img className="oliveimg" src={olive} alt="" />
          ) : (
            <></>
          )}
          {props.ingredients["mushroom"] ? (
            <img className="mushimg" src={mushroom} alt="" />
          ) : (
            <></>
          )}
          {props.ingredients["basil"] ? (
            <img className="basilimg" src={basil} alt="" />
          ) : (
            <></>
          )}
          {props.ingredients["pineapple"] ? (
            <img className="pineappimg" src={pineapple} alt="" />
          ) : (
            <></>
          )}
        </div>
        <div className="choose">
          <input
            className="check"
            type="checkbox"
            onChange={(event) => changestate("cheese", event)}
          />
          <label>Cheese</label>
          <br />
          <input
            className="check"
            type="checkbox"
            onChange={(event) => changestate("tomato", event)}
          />
          <label>Tomato</label>
          <br />
          <input
            className="check"
            type="checkbox"
            onChange={(event) => changestate("olive", event)}
          />
          <label>Olive</label>
          <br />
          <input
            className="check"
            type="checkbox"
            onChange={(event) => changestate("mushroom", event)}
          />
          <label>Mushroom</label>
          <br />
          <input
            className="check"
            type="checkbox"
            onChange={(event) => changestate("basil", event)}
          />
          <label>Basil</label>
          <br />
          <input
            className="check"
            type="checkbox"
            onChange={(event) => changestate("pineapple", event)}
          />
          <label>Pineapple</label>
          <br />
          {/* {JSON.stringify(props.ingredients)} */}
          {/* <Link to="/checkout">
            <button className="checkoutbut">Proceed to checkout</button>
          </Link> */}
          <button className="checkoutbut" onClick={() => navigate("/checkout")}>
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customise;
