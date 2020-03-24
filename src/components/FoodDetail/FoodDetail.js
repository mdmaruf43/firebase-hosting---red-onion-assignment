import React , { useState, useEffect } from 'react';
import './FoodDetail.css';
import fakeData from '../../demoData';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FoodDetail = (props) => {
    const {foodId} = useParams();
    const currentFood = fakeData.find(food => food.id === foodId);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
    // const total = props.cart.reduce((total, food) => total + Number(food.price) * food.quantity, 0)
    // console.log(total);
    console.log(quantity);

    return (
        <div className="my-5 container">
            <div className="row">
                <div className="col-md-6">
                    <h1>{currentFood.name}</h1>
                    <p className="my-5">{currentFood.foodDescription}</p>
                    <div className="d-flex  my-4">
                        <h2 className="price">{currentFood.price}</h2>

                        <div className="cart-controller ml-3 btn"> 
                            <button className="btn" onClick={() => setQuantity(quantity <= 1 ? currentFood.quantity : quantity - 1)}>-</button> {quantity} <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>
                    <p className="d-flex my-5">Quantity: {currentFood.quantity}</p>
                    <div className="action d-flex align-items-center">
                        <button className="btn btn-danger btn-rounded mb-2"><FontAwesomeIcon icon={faCartArrowDown} /> Add</button>
                    </div>

                    <div className="more-images mt-5 ">
                        <img height="150px" src={currentFood.image} alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={currentFood.image} alt=""/>
                </div>

            </div>
        </div>
    );
};

export default FoodDetail;