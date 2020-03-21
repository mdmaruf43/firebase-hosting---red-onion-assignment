import React from 'react';
import {Link} from 'react-router-dom';
import './FoodItem.css';

const FoodItem = (props) => {
    const {id, name, title, price, img} = props.food;
    return (
        <div className="container">
            <div className="col-md-4 mb-4">
            <Link to={"food/"+id}>
                <div className="card text-center">
                    <img src={img} alt="" className="card-img-top"/>
                    <div className="card-body">
                        <h5>{name}</h5>
                        <p>{title}</p>
                        <h4>${price}</h4>
                    </div>
                </div>
            </Link>
        </div>
        </div>
    );
}

export default FoodItem;