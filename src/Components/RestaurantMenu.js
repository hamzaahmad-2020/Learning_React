import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiImg } from "../contants";

const RestaurantMenu = () =>{
    const {resId} = useParams()

    const [restaurant, setRestaurant] = useState({});

    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const data = await fetch(
          "http://127.0.0.1:5500/menu.json"
        );
        const json = await data.json();
            console.log(json);
        setRestaurant(json.Menu[0]);
    }

    return(
        <>
        <h1>Restaurant Id: {resId}</h1>
        <p>{restaurant.name}</p>
        <img src= {ApiImg + restaurant.image}/>
        </>
    );
};

export default RestaurantMenu