import React from "react";




const RestaurantCard = () => {

    const restaurant = {
        name: "Michael’s Food Place",
        img: "",
        rating: 3,
        been_here: true,

    }


    const BookMarkMe = () => {
        console.log(restaurant);
    }



    return (
        <div className="rest_card">
            <div className="img_container">
                {restaurant.been_here ? <img className="been_here" src="../../images/Been_Here.png" /> : null}
                <img className="rest_img" src={!restaurant.img ==="" ? restaurant.img : "../../images/restaurant_placeholder.jpg"} alt={restaurant.name} />
                {/* Add action to bookmark as well */}
                <a className="bookmark"  onClick ={BookMarkMe}></a>
            </div>
            
            <div className="rest_info">
                <h3>{restaurant.name}</h3>
                <p>Rating:</p>
                <p>See Reviews</p>
                <div>
                    
                </div>
            </div>


        </div>
    )
}

export default RestaurantCard;