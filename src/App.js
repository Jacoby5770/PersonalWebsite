import React from 'react';
import logo from './logo.svg';
import './App.css';
import { 
  Sidebar,
  Home
} from './components'

function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
}

function App() {
  return (
    <div className="App">
      <div>
        <Sidebar />
      </div>
      <header className="App-header">
        <Home handleClick={handleClick}/>
      </header>
    </div>
  );
}

export default App;
