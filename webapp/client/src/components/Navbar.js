import React from "react";
import './Navbar.css';
import logo from './logo.png';

function Navbar(){
    return(
        <div className="navbar_container">
            <div className="items_container">
                <img src={logo} width="20px" height = "20px"></img>
                <div className="title">EQUAL WRITES</div>
            </div>
        </div>
    )
}

export default Navbar;