import React from "react";
import "./Input.css";
import { useState } from "react";


function Input({textHandler}){
    const [text, setText] = useState("");

    function handleText(event){
        event.preventDefault();
        textHandler(text);
    }
    
    

    return (
        <div className="input">
            <h3>unnamed document</h3>
            <form className="input_container" onSubmit={handleText}>
                <textarea onChange={e => setText(e.target.value)} className="input_box" type="text"></textarea>
                <button className="button" type="submit">Submit!</button>                 {/*add button function */}
            </form>

        </div>
    );
}
export default Input;