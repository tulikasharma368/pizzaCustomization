import React, { useEffect } from "react";
import Checkout from './components/checkout/Checkout'
import Customise from './components/customise/Customise'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  const [items, setitems] = React.useState({
    cheese:false,
    tomato:false,
    olive:false,
    mushroom:false,
    basil:false,
    pineapple:false,
  });

  React.useEffect(()=>{
    const data = localStorage.getItem('ingredients');
    if(data){
      setitems(JSON.parse(data))
    }
  },[]);

  return (
    <div>
      {/* <Checkout ingredients={items}/> */}
      {/* <Customise ingredients={items} setingredients={setitems}/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Customise ingredients={items} setingredients={setitems}/>}></Route>
          <Route path='/checkout' element={<Checkout  ingredients={items}/>}></Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
