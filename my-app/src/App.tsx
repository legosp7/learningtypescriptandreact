import React from 'react';
import logo from './status.png';
import Button from '@mui/material/Button'
import './App.css';


function MyButton({ title }: { title: string }) {
  return <Button variant="contained">{title}</Button>;
}

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton title="Oguri as in Peak" />
      </header>
    </div>
  );
}

