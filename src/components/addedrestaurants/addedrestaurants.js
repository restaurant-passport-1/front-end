import React from "react";
import RestaurantCard from '../restaurantcard/restaurantcard'


const AddedRestaurants = () => {




    return (

        <div className="restaurants_container">
            <div className="added_restaurants">
                <RestaurantCard />
            </div>
            {/* <div className="stamped_restaurants">
            </div>
            <div className="recommended_restaurants">
            </div> */}
        </div>
    )

}

export default AddedRestaurants;