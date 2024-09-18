import React from "react";
import { json } from "react-router";
import { RestaurantList } from "../contants";

class Profile1 extends React.Component{
    constructor(props) {
    super(props)
    console.log("constructor");
        this.state ={
            RestaurantList: {
                name: "Dumy",
                id: "dumy"
            },
        };
    };

    async componentDidMount(){
        console.log("componentDidMount");
        const data = await fetch("http://127.0.0.1:5500/menu.json");
        const json = await data.json();
        this.setState({
            RestaurantList: json,
        })
        console.log(this.props.name);

        // this.timer = setInterval(() => {
        //     console.log("Hamza")
        // }, 1000);

    };

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    render (){
        console.log("render");

        return(
            <>
            
            <h1>Profile1</h1>
            <p>This Profile Page</p>
            <p>Name: {this.state.RestaurantList.name}</p>
            <h3>Id: {this.state.RestaurantList.id}</h3>
            </>
        );
    }
}

export default Profile1