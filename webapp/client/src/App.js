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

  function checkEmpty(string){
    return string != '';
  }

  function processText() {
    const punctuationless = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const lower = punctuationless.toLowerCase();
    const text_array = lower.split(" ").filter(checkEmpty);
    var arrayLength = text_array.length;
    console.log(text_array);
    var masct = 0;
    var femct = 0;
    var racct = 0;
    var disct = 0;


    for (var i = 0; i < arrayLength; i++) {
      if (masculine_terms.includes(text_array[i])) {
        masct = masct + 1;
      }
      if (feminine_terms.includes(text_array[i])) {
        femct = femct + 1;
      }
      if (racial_terms.includes(text_array[i])) {
        racct = racct + 1;
      }
      if (disability_terms.includes(text_array[i])) {
        disct = disct + 1;
      }
    }
    setMas(state => state = masct/arrayLength * 100); 
    setFem(state => state = femct/arrayLength * 100); 
    setRace(state => state = racct/arrayLength * 100); 
    setDisability(state => state = disct/arrayLength * 100); 
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
        <h3>Suggestions</h3>
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
  );
}

export default App;
