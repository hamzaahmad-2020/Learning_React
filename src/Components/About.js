import React from "react";
import { Outlet } from "react-router-dom";
import Profile1 from "./Profile1";
import Profile2 from "./profile2";
import UserContext from "../Utils/UserContext";

class About extends React.Component{
    render (){
        return(
            <>
            <h1>About</h1>
            <UserContext.Consumer>
                {({user}) => <h3 className="font-bold text-xl p-10">{user.name}-{user.email}</h3>}
            </UserContext.Consumer>
            <p>This About Page</p>
            <Profile1 />
            </>
        );
    }
}

export default About