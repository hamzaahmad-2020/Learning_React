import RestaurantCard from "./Restaurantcard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";



const Body = () => {
    const [restaurants, setRestaurant] = useState([]);
    const [filterRestaurants, setFilterRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const{user, setUser} = useContext(UserContext);

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

    // const isOnline = useOnline();
    // if(!isOnline){
    //     return <h1>🔴 Offline, please check your internet connection.</h1>
    // }

    if (!restaurants) return null;

    return restaurants?.length === 0 ? 
    (<Shimmer/>) : (
        <>

        <div className="py-5 bg-orange-400">
            <input 
            type="text"
            className="p-1  shadow-md ml-5 border-solid rounded-md "
            placeholder="Search"
            value={searchText}
            onChange={(e) =>{
                setSearchText(e.target.value);
            }}
            />
            
            <button 
            className="bg-slate-900 text-white border-red-500 p-1 rounded-md" 
                onClick={() =>{
                    const data = filterData(searchText, restaurants);
                    setFilterRestaurants(data);
                    // setRestaurant(data);

                }}
            > Search

            </button>
            <input value={user.name} onChange={
                e => setUser({
                    name: e.target.value,
                    email: "new@email.com"
                })
            } ></input>
        </div>

    <div className="flex justify-between">
        
        {filterRestaurants.map((restaurant) =>{
            return (
            <Link to = {"/Restaurant/" + restaurant.id } 
            key={restaurant.id}>
                <RestaurantCard {...restaurant} />
                </Link>
            );
            })};

    </div>
    </>
 );
};

export default Body;