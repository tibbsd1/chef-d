import React, { createContext, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Breakfast from './Components/Breakfast'
import MenuTabs from "./Components/MenuTabs"
import Lunch from './Components/Lunch';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Drinks from './Components/Drinks';
import Checkout from './Components/Checkout';
import MenuDisplay from './Components/Menu-Display';

export const MenuItemContext = createContext()

function App() {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems(cartItems => [...cartItems, item]);
    const returnItems = [...cartItems, item]
    console.log(returnItems)
    return returnItems;
  };
  
  const removeFromCart = (i, arr, func) => {
    arr.splice(i, 1);
    localStorage.setItem("item", JSON.stringify(arr))
    return func([...arr])
  }

  return (

    <div className="App">
      <MenuItemContext.Provider value={{ addToCart, removeFromCart, cartItems }}>
        <Navbar />
        <MenuTabs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/breakfast" element={<MenuDisplay urlRoute={'breakfast-items'} />} />
          <Route path='/lunch' element={<MenuDisplay urlRoute={'lunch-items'} />} />
          <Route path='/drinks' element={<MenuDisplay urlRoute={'drink-items'} />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </MenuItemContext.Provider>

    </div>
  );
}

export default App;
