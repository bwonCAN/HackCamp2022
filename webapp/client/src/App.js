import './App.css';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';
import { useState } from 'react';
import { masculine_terms } from './dictionary.js';
import { feminine_terms } from './dictionary.js';
import { racial_terms } from './dictionary.js';
import { disability_terms } from './dictionary.js';


function App() {
  const [text, setText] = useState("");
  const [fem, setFem] = useState(0);
  const [mas, setMas] = useState(0);
  const [race, setRace] = useState(0);
  const [disability, setDisability] = useState(0);

  function processText() {
    const punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const text_array = punctuationless.split(" ");
    var arrayLength = text_array.length;
    console.log(text_array)
    var ct = 0;

    for (var i = 0; i < arrayLength; i++) {
      if (masculine_terms.includes(text_array[i])) {
        setMas(state => state + 1); 
      }
      if (feminine_terms.includes(text_array[i])) {
        setFem(state => state + 1); 
      }
      if (racial_terms.includes(text_array[i])) {
        setRace(state => state + 1); 
      }
      if (disability_terms.includes(text_array[i])) {
        setDisability(state => state + 1); 
      }
    }
  }

  return (
    <div className="App">
      <Navbar/>
      <div className='big_container'>
        <div className='input_outercontain'>
        <Input setText={setText}/>
        </div>
        <p>The text is: {text}</p>
        <button className="button" onClick={() => processText()}>Submit!</button>
      <div className='profile_container'>
        <div className='big_container'>
        <Profile
      heading= "Masculine"
      description= "There is X% masculine bias detected in the text. Changes are recommended."
      percentage = {mas}
      />
      <Profile
      heading= "Feminine"
      description= "There is X% feminine bias detected in the text. Changes are recommended."
      percentage = {fem}
      />
        </div>
        <div className='big_container'>
        <Profile
      heading= "Race"
      description= "There is X% racial bias detected in the text. Changes are recommended."
      percentage = {race}
      />
      <Profile
      heading= "Disability"
      description= "There is X% disability bias detected in the text. Changes are recommended."
      percentage = {disability}
      />
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
