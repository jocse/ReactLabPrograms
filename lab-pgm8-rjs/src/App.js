import React, { useState, useEffect } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [isShown, setIsShown] = useState(false);
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        return 'Good Morning';
      } else if (hour < 18) {
        return 'Good Afternoon';
      } else {
        return 'Good Evening';
      }
    };

    setGreeting(getGreeting());
  }, []);

  const handleSubmit = () => {
    setIsShown(true);
  };

  return (
    <div className="App">
      <h1>Global Academy of Technology, Bengaluru</h1>
      <h2>Department of CS&E</h2>
      <h3>Hello, {greeting}</h3>
      Name:
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /> 
      <br />
      Place:
      <input
        type="text"
        placeholder="Place"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
      /> 
      <br />
      <button onClick={handleSubmit}>Submit</button>
        
      {isShown && (
        <div className="display-info">
          <h2>Welcome, {name} from {place}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
