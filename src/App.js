import React,{useState, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import FoodContent from './components/FoodContent/FoodContent';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import FoodDetail from './components/FoodDetail/FoodDetail';
import { getDatabaseCart, addToDatabaseCart } from './utilities/databaseManager';
import { AuthContextProvider } from './components/Login/UseAuth';
import Inventory from './components/Inventory/Inventory';
import Shipment from './components/Shipment/Shipment';

function App() {
  const [cart , setCart] = useState([]);
  useEffect(() => {
    const saveCart = getDatabaseCart(); 
    const foodKey = Object.keys(saveCart);
    fetch('https://glacial-woodland-72025.herokuapp.com/products', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(foodKey)
    })
    .then(res => res.json())
    .then(data => {
        const cardFoods = foodKey.map(key => {
        const food = data.find(fd => fd.key === key);
        food.quantity = saveCart[key];
        return food;
      })
      setCart(cardFoods);   
    })
  }, [])
  const handleFoodCart = (food) => {
    const sameFood = cart.find(fd => fd.key === food.key);
    let count = 1, newCart;
    if(sameFood){
      count = sameFood.quantity + 1;
      sameFood.quantity = count;
      const othersFood = cart.filter(fd => fd.key !== food.key);
      newCart = [...othersFood, sameFood];
    }
    else{
      food.quantity = 1;
      newCart =[...cart, food];
    }
    setCart(newCart);
    addToDatabaseCart(food.id, count);
  }
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/shipment">
              <Header cart={cart}></Header>
              <Shipment/>
            </Route>
            <Route path="/inventory">
                <Header cart={cart}/>
                <Inventory/>
            </Route>
            <Route exact path="/">
              <Header cart={cart}></Header>
              <Banner/>
              <FoodContent handleFoodCart={handleFoodCart} cart={cart}></FoodContent>
              <Footer/>
            </Route>
            <Route path="/food/:foodkey">
              <Header cart={cart}></Header>
              <FoodDetail cart={cart}></FoodDetail>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}

export default App;
