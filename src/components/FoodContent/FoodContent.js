import React from 'react';
import './FoodContent.css';
import demoData from '../../demoData';
import { useState } from 'react';
import { useEffect } from 'react';
import FoodItem from '../FoodItem/FoodItem';

const FoodContent = () => {
const first6 = demoData.slice(0, 6);
const [foods, setFoods] = useState(first6);
const [matchFoodType, setMatchFoodType] = useState("");
useEffect(() => {
    setFoods(demoData);
}, [])
const matchFoods = foods.filter(food => food.category === matchFoodType);
console.log(matchFoodType);
    return (
        <div className="container">
            <nav>
                <ul className="nav d-flex justify-content-center">
                    <li onClick={() => setMatchFoodType("Breakfast")} className="nav-item">
                        <span className={matchFoodType === "breakfast" ?  "active nav-link" : "nav-link"}>Breakfast</span>
                    </li>
                    <li onClick={() => setMatchFoodType("Lunch")} className="nav-item">
                        <span to="breakfast" className={matchFoodType === "lunch" ?  "active nav-link" : "nav-link"}>Lunch</span>
                    </li>
                    <li onClick={() => setMatchFoodType("Dinner")} className="nav-item">
                        <span to="breakfast" className={matchFoodType === "dinner" ?  "active nav-link" : "nav-link"}>Dinner</span>
                    </li>
                </ul>
            </nav>
            <div className="row my-5">
                {
                    matchFoods.map(food => <FoodItem food={food}></FoodItem>)
                }
            </div>
            <div className="text-center">
                <button disabled className="btn btn-secondary">Check Out Your Food</button>
            </div>
        </div>
    );
};

export default FoodContent;