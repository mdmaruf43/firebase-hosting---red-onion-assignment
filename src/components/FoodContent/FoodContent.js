import React from 'react';
import './FoodContent.css';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodItem from '../FoodItem/FoodItem';
import fakeData from '../../demoData';
import { Link } from 'react-router-dom'; 
import {addToDatabaseCart} from '../../utilities/databaseManager';

const FoodContent = (props) => {
    const [foods, setFoods] = useState([]);
    const [selectedFoodType, setSelectedFoodType] = useState("lunch");
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setFoods(fakeData);
    }, [])
    const selectedFoods =  foods.filter(food => food.category === selectedFoodType).slice(0, 6)

    const handleAddFood = (food) => {
        const newCart = [...cart, food];
        setCart(newCart);
        const sameFood = newCart.filter(fd => fd.id === food.id);
        const count = sameFood.length;
        addToDatabaseCart(food.id, count);
    }
    return (
        <div className="container">
            <nav>
                <ul className="nav justify-content-center">
                    <li onClick={() => setSelectedFoodType("breakfast")} className="nav-item">
                        <Link  to="/" className={selectedFoodType === "breakfast" ?  "active nav-link" : "nav-link"}>Breakfast</Link>
                    </li>
                    <li onClick={() => setSelectedFoodType("lunch")} className="nav-item">
                        <Link to="/" className={selectedFoodType === "lunch" ?  "active nav-link" : "nav-link"}>Lunch</Link>
                    </li>
                    <li onClick={() => setSelectedFoodType("dinner")} className="nav-item">
                        <Link to="/" className={selectedFoodType === "dinner" ?  "active nav-link" : "nav-link"}>Dinner</Link>
                    </li>
                </ul>
            </nav>
            <div className="row my-5">
                {
                    selectedFoods.map(food => <FoodItem key={food.id} handleAddFood={handleAddFood} cart={cart} food={food}></FoodItem>)
                }
            </div>
            <div className="text-center">
                {
                    props.cart.length ? 
                    <Link to="/checkout">
                        <button  className="btn btn-danger btn-secondary">Check Out Your Food</button>
                    </Link>
                    :
                    <button disabled className="btn btn-secondary">Check Out Your Food</button>

                }
            </div>
        </div>
    );
};

export default FoodContent;