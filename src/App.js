import React from "react";
import Navbar from "./components/navbar/Navbar"
import Home from "./components/Home/Home"
import ProductDisplay from "./components/Productdisplay/ProductDisplay";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <ProductDisplay/>
    </div>
  );
}

export default App;
