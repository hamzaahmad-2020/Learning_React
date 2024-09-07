import { useParams } from "react-router-dom";
import { useEffect } from "react";

const RestaurantMenu = () =>{
    const {resId} = useParams()

    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const data = await fetch(
          "http://127.0.0.1:5500/db.json"
        );
        const json = await data.json();
            console.log(json);
        
    }

    return(
        <>
        <h1>Restaurant Id: {resId}</h1>
        <p>This Restaurant Page</p>
        </>
    );
};

export default RestaurantMenu