import React from "react";
import { Outlet } from "react-router-dom";
import Profile1 from "./Profile1";
import Profile2 from "./profile2";

class About extends React.Component{
    render (){
        return(
            <>
            <h1>About</h1>
            <p>This About Page</p>
            <Profile1 />
            </>
        );
    }
}

export default About