import React from 'react';
import {Link} from 'react-router-dom';
const FoodItem = (props) => {
    const {name, price, image, title, id} = props.food;
    console.log(props.food.id);
    return (
        <div className="col-md-4 mb-4">
            <Link onClick={() => props.handleAddFood(props.food)} to={"/food/"+id}>
                <div className="card text-center">
                    <img src={image} alt="" className="img-fluid card-img-top"/>
                    <div className="card-body">
                        <h6>{name}</h6>
                        <p>{title}</p>
                        <h6>${price}</h6>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default FoodItem;