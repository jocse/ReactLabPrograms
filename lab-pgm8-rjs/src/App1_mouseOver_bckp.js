import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [name, setName] = useState('');
  const [place, setPlace] = useState('');
  const [displayInfo, setDisplayInfo] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleSubmit = () => {
    setDisplayInfo(true);
  };

  return (
    <div className="App">
      <h1>Simple Form</h1>
      Name :<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br/>
      Place :<input type="text" placeholder="Place" value={place} onChange={(e) => setPlace(e.target.value)} /> <br/>
      <button onClick={handleSubmit} >Submit</button>
        <button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}>
        Hover over me!
      </button>
      {isShown && (
        <div>
          Your information is recorded
        </div>
      )}
      {displayInfo && (
        <div className="display-info">
          <h2>Name: {name}</h2>
          <h2>Place: {place}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
