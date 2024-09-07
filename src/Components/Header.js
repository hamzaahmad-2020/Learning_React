import { useState } from "react";
import logo from "../assets/img/Logo.png";
import { Link } from "react-router-dom";


const Title = () => (
    <a href="/">
    <img className="logo" alt="log" src={logo}/>

    </a>
);


const Header = () => {
    const [isLoggedin, SetIsLoggedin] = useState(false)
    return (
    
    <div className="header">

        <Title />

        <div className="Nav-item">
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link  to={"/contant"}>Contant</Link></li>
            <li>Cart</li>
        </ul>
        {isLoggedin ?
        (<button onClick={()=> SetIsLoggedin(false)}>Logout</button>) : 
        (<button onClick={()=> SetIsLoggedin(true)}> Login</button>)
        }
        </div>
    </div>
 );
};

export default Header;