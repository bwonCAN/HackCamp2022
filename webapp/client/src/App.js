import './App.css';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';
import { useState } from 'react';
import { masculine_terms } from './dictionary.js';
import { feminine_terms } from './dictionary.js';
import { racial_terms } from './dictionary.js';
import { disability_terms } from './dictionary.js';
import Alert from "./images/Alert.png";


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
    setMas(state => state = Math.round(masct/arrayLength * 100)); 
    setFem(state => state = Math.round(femct/arrayLength * 100)); 
    setRace(state => state = Math.round(racct/arrayLength * 100)); 
    setDisability(state => state = Math.round(disct/arrayLength * 100)); 
  }

  function clear(){
    setMas(state => state = 0); 
    setFem(state => state = 0); 
    setRace(state => state = 0); 
    setDisability(state => state = 0); 
  }

  return (
    <div className="App">
      <Navbar/>
      <div className='big_container'>
        <div className='input_outercontain'>
        <Input setText={setText}/>
        <button className="button" onClick={() => processText()}>Submit!</button>
        <button className="button" onClick={() => clear()}>Clear!</button>
        </div>
      <div className='profile_container'>
      <div className='button_container'> <img height="25px" width="25px" className="profilepicture" src={Alert} alt='icon'/> <h3>Suggestions</h3></div>
      <Profile
      heading= "Masculine"
      percentage = {mas}
      />
      <Profile
      heading= "Feminine"
      percentage = {fem}
      />
      <Profile
      heading= "Race"
      percentage = {race}
      />
      <Profile
      heading= "Disability"
      percentage = {disability}
      />
      </div>
      </div>
    </div>
  );
}

export default App;
