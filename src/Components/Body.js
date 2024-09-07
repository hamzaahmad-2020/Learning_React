import RestaurantCard from "./Restaurantcard";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

function filterData (searchText, restaurants) {
   const filterdata = restaurants.filter((restaurant) => 
    restaurant.name.includes(searchText)
   
   );
   return filterdata;
   
};


const Body = () => {
    const [restaurants, setRestaurant] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
      }, []);
    
      async function getRestaurants() {
        const data = await fetch(
          "http://127.0.0.1:5500/db.json"
        );
        const json = await data.json();
            setRestaurant(json?.RestaurantList);
            setFilterRestaurants(json?.RestaurantList);
        
    }

    return (restaurants.length === 0) ? 
    <Shimmer/> : (
        <>

        <div className="searchcontainer">
            <input 
            type="text"
            className="searchiput"
            placeholder="Search"
            value={searchText}
            onChange={(e) =>{
                setSearchText(e.target.value);
            }}
            />
            
            <button 
            className="search-btn" 
                onClick={() =>{
                    const data = filterData(searchText, restaurants);
                    setFilterRestaurants(data);
                    // setRestaurant(data);

                }}
            > Search

            </button>
        </div>

    <div className="resturantlist">
        
        {filterRestaurants.map((restaurant) =>{
            return <RestaurantCard {...restaurant} key={restaurant.id}/>
        })};

    </div>
    </>
 );
};

export default Body;