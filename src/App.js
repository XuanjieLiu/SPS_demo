import React from 'react';
import './App.css';
import BallTaskDemo from './Components/BallTaskDemo/BallTaskDemo';
import Introduction from './Components/Introduction/Introduction';
import ScaleTaskDemo from './Components/ScaleTaskDemo/ScaleTaskDemo';


function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Introduction />
        <ScaleTaskDemo />
        <BallTaskDemo />
      </div>
    </div>
  );
}



export default App;
