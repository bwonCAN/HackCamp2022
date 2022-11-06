import React from "react"
import "./Profile.css"

function Profile (props) {
    return ( 
        <div className="profile">
            <p className="heading">{props.heading}</p>
            <p className="description"> {props.description} </p>


        </div>
    )
 }
 export default Profile