import { useState, useEffect } from "react";
import { Api } from "../contants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState("");

    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const data = await fetch("http://127.0.0.1:5500/db.json");
        const json = await data.json();
            console.log(json);
        setRestaurant(json.RestaurantList[1]);
    };
    return restaurant;
    
};
export default useRestaurant;