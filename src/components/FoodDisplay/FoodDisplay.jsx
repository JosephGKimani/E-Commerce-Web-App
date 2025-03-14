import { StoreContext } from '../../Context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css';
import React, { useContext } from 'react';

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes</h2>
            <div className='food-display-list'>
                {food_list
                    .filter(item => category === "All" || category === item.category)
                    .map((item, index) => (
                        <FoodItem
                            key={index}
                            id={item._id}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    ))}
            </div>
        </div>
    );
};

export default FoodDisplay;
