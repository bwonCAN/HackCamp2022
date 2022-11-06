import './App.css';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';
import { useState } from 'react';




function App() {
  const [text, setText] = useState("");

  function textHandler(string){
    setText(string);
  }

  function processText() {
    const punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const text_array = punctuationless.split(" ");
    console.log(text_array);
  }
  processText();
  return (
    <div className="App">
      <Navbar/>
      <div className='big_container'>
        <div className='input_outercontain'>
        <Input textHandler = {textHandler}/>
        </div>
      <div className='profile_container'>
      <Profile
      heading= "Gender"
      description= "There is X% gender bias detected in the text. Changes are recommended."
      />
      <Profile
      heading= "Race"
      description= "There is X% racial bias detected in the text. Changes are recommended."
      />
      <Profile
      heading= "Disability"
      description= "There is X% disability bias detected in the text. Changes are recommended."
      />
      </div>
      </div>
    </div>
  );
}

export default App;
