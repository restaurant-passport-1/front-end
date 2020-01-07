  
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import styles from "../../styles/styles.css"






const Footer = () => {



    


    return (

        <div className="footer">
            <Link to="/">About</Link>
            <Link to="/">Sign Out</Link>
            <Link to="/">Join</Link>
            <Link to="/">Ratings</Link>
            <Link to="/">Reviews</Link>
            <Link to="/">Nearby Restaurants</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Help</Link>
            <Link to="/">Search</Link>
        </div>
    )
}

export default Footer;