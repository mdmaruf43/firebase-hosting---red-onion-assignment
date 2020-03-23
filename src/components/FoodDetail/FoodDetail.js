import React , { useState } from 'react';
import './FoodDetail.css';
import fakeData from '../../demoData';
import { useParams } from 'react-router-dom';
import { getDatabaseCart } from '../../utilities/databaseManager';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const FoodDetail = (props) => {
    const {foodId} = useParams();
    const currentFood = fakeData.find(food => food.id === foodId);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState(1);
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
        <div className="food-details my-5 pt-5 container">
            <h3>Cart Length: {cart.length}</h3>
            <div className="row">
                <div className="col-md-6 pr-md-4">
                    <h1>{currentFood.name}</h1>
                    <p className="my-5">{currentFood.foodDescription}</p>
                    <div className="d-flex  my-4">
                        <h2 className="price">${currentFood.price}</h2>

                        <div className="cart-controller ml-3 btn">
                            <button className="btn" onClick={() => setQuantity(quantity <= 1 ? 1 : quantity - 1)}>-</button> {quantity} <button className="btn" onClick={() => setQuantity(quantity + 1)}>+</button>
                        </div>
                    </div>
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