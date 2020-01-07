import React, {useState} from "react";
// import styled from "styled-components";
// import Navbar from "../Navbar/Navbar.js";
import Profile from '../profile/profile'
import AddedRestaurants from '../addedrestaurants/addedrestaurants'
// import Footer from "../Footer/Footer.js";
// import styles from "../../styles/styles.css";

//Where data is held for state 


const Dashboard = ({data}) => {



    return (
        <div className="dashboard">
            {/* <Navbar /> */}
            <Profile />
            <AddedRestaurants />
            
            {/* <Footer /> */}
        </div>
    )
}


export default Dashboard