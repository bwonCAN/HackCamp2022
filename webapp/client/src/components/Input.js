import React from "react";
import "./Input.css";
import { useState } from "react";
import Icon from "./icon/lightning.png";


function Input(props){
    const [text, setText] = useState("");

    function handleText(event){
        event.preventDefault();
        props.textHandler(text);
    }
    
    return (
        <div className="input">
            <div className="topic_container"><img src={Icon} height="40px" width="40px"></img><h3>Check Your Writes!</h3></div>
            <form className="input_container" onSubmit={handleText}>
                <textarea onChange={e => props.setText(e.target.value)} className="input_box" type="text" placeholder="Type or paste (⌘+V) your text here"></textarea>
                              {/* removed button here */}
            </form>

        </div>
    );
}
export default Input;