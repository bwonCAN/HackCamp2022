import React from "react"
import "./Profile.css"

function Profile (props) {
    var descrip = "There is 0% bias detected. This is Equal Writes approved!";
    if (props.percentage >= 50){
        descrip = "There is " + props.percentage + "% detected. Changes are highly recommended!";
    }else if (20 <  props.percentage && props.percentage < 50){
        descrip = "There is " + props.percentage + "% detected. Changes are recommended!";
    }else if (0 < props.percentage && props.percentage <= 20){
        descrip = "There is " + props.percentage + "% detected. Changes are suggested!";
    }else{
        descrip = "There is 0% bias detected. This is Equal Writes approved!";
    }
    return ( 
        <div className="profile">
            <p className="heading">{props.heading}</p>
            <p className="description"> {descrip} </p>
            <h2>{props.percentage} %</h2>


        </div>
    )
 }
 export default Profile