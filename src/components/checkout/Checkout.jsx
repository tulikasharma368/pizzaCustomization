import React from "react";
import Header from "../header/Header";
import "./checkout.css";
import pizzaman from "../../assets/PizzaMan.png";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const [confirmord, setconfirmord] = React.useState(false);
  const confirm = () => {
    setconfirmord(true);
  };
  return (
    <div>
      <Header />
      <div className="checkoutconts">
        <div className="checkings">
          <div>
            {props.ingredients.length != 0 ? (
              <h3>Your selected ingredients</h3>
            ) : (
              <h3>No ingredients selected</h3>
            )}
          </div>
          <div>{props.ingredients["cheese"] ? <p>Cheese</p> : <></>}</div>
          <div>{props.ingredients["tomato"] ? <p>Tomato</p> : <></>}</div>
          <div>{props.ingredients["olive"] ? <p>Olive</p> : <></>}</div>
          <div>{props.ingredients["mushroom"] ? <p>Mushroom</p> : <></>}</div>
          <div>{props.ingredients["basil"] ? <p>Basil</p> : <></>}</div>
          <div>{props.ingredients["pineapple"] ? <p>Pineapple</p> : <></>}</div>
          {props.ingredients.length != 0 ? (
            <div>
              <Link to="/">
                <button className="checkoutbuts">Go Back</button>
              </Link>
              <button className="checkoutbuts" onClick={confirm}>
                Confirm
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
        {confirmord ? (
          <div>
            <img src={pizzaman} alt="" />
            <div className="orderdets">
              <h3 className="p">We have recieved your order, Thank You</h3>
              <p className="p">Order #1234</p>
              <p className="p">Will be ready in 20 mins</p>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Checkout;
