import './App.css';
import Input from './components/Input.js';
import Navbar from './components/Navbar.js';
import Profile from './components/Profile.js';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Input/>

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
  );
}

export default App;
