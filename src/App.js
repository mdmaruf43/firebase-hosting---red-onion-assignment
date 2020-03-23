import React,{useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import FoodContent from './components/FoodContent/FoodContent';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import FoodDetail from './components/FoodDetail/FoodDetail';
import fakeData from './demoData';
import { getDatabaseCart } from './utilities/databaseManager';

function App() {
  const [cart , setCart] = useState([]);
  useState(() => {
    const saveCart = getDatabaseCart();
    const foodId = Object.keys(saveCart);
    const cardFoods = foodId.map(id => {
        const food = fakeData.find(fd => fd.id === id);
        food.quantity = saveCart[id];
        return food;
    });
    setCart(cardFoods);
}, [])
  return (
      <Router>
        <Header cart={cart}></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/">
            <Banner></Banner>
            <FoodContent cart={cart}></FoodContent>
            <Footer></Footer>
          </Route>
          <Route path="/food/:foodId">
            <FoodDetail></FoodDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
