import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ApiImg } from "../contants";
import useRestaurant from "../Utils/useRestaurant";
// import Shimmer from "./Shimmer";
import Shimmer from "./Shimmer";




const RestaurantMenu = () =>{
    const {resId} = useParams();


    const restaurant = useRestaurant(resId);

    return !restaurant ? (
      <Shimmer/>
    ) : (
        <>
        <h1>Restaurant Id: {resId}</h1>
        <p>{restaurant.name}</p>
        <img src= {restaurant.image}/>
        </>
    );
    
};

export default RestaurantMenu