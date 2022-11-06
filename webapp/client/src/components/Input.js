import React from "react";
import "./Input.css";
import { useState } from "react";


function Input(props){
    const [text, setText] = useState("");

    function handleText(event){
        event.preventDefault();
        props.textHandler(text);
    }
    
    return (
        <div className="input">
            <h3>unnamed document</h3>
            <form className="input_container" onSubmit={handleText}>
                <textarea onChange={e => props.setText(e.target.value)} className="input_box" type="text" placeholder="Type or paste (⌘+V) your text here or upload a document"></textarea>
                              {/* removed button here */}
            </form>

        </div>
    );
}
export default Input;