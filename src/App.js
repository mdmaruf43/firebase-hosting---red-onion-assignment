import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import FoodContent from './components/FoodContent/FoodContent';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Banner from './components/Banner/Banner';
import FoodDetails from './components/FoodDetails/FoodDetails';
import Footer from './components/Footer/Footer';

function App() {
  return (
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/food/:id">
            <FoodDetails></FoodDetails>
          </Route>
          <Route exact path="/">
            <Banner></Banner>
            <FoodContent></FoodContent>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
          <Route>

          </Route>
        </Switch>
      </Router>
  );
}

export default App;
