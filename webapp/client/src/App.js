import './App.css';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';
import { useState } from 'react';




function App() {
  const [text, setText] = useState("");
  const [fem, setFem] = useState(0);
  const [mas, setMas] = useState(0);
  const [race, setRace] = useState(0);
  const [disability, setDisability] = useState(0);

  function textHandler(string){
    setText(string);
  }

  return (
    <div className="App">
      <Navbar/>
      <h1>{text}</h1>
      <div className='big_container'>
        <div className='input_outercontain'>
        <Input textHandler = {textHandler}/>
        </div>
      <div className='profile_container'>
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
