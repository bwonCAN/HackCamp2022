import React from "react";
import "./Input.css";


function Input(){
    return (
        <div className="input">
            <p>Enter text here</p>
            <form className="input_container">
                <textarea className="input_box" type="text"></textarea>
                <button className="button">Submit!</button>                 {/*add button function */}
            </form>

        </div>
    );
}
export default Input;