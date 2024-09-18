import { useState, useContext } from "react";
import logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";


const Title = () => (
    <a href="/">
    <img className="h-28 p-2" alt="log" src={logo}/>

    </a>
);


const Header = () => {
    const [isLoggedin, SetIsLoggedin] = useState(false)
    
    const isOnline = useOnline();
    
    const {user} = useContext(UserContext);
    
    return (
    
    <div className="flex justify-between bg-yellow-500">

        <Title /> 

        <div className="Nav-item">
        <ul className="flex py-10">
            <li className="px-2"><Link to={"/"}>Home</Link></li>
            <li className="px-2"><Link to={"/about"}>About</Link></li>
            <li className="px-2"><Link  to={"/contant"}>Contant</Link></li>
            <li className="px-2">Cart</li>
        </ul>
        </div>
        <h1>{isOnline? '✅' : '🔴'} </h1>
        {user.name}
        {isLoggedin ?
        (<button onClick={()=> SetIsLoggedin(false)}>Logout</button>) : 
        (<button onClick={()=> SetIsLoggedin(true)}> Login</button>)
        }
        
    </div>
 );
};

export default Header;