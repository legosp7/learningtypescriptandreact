import logo from './status.png';
import Button from '@mui/material/Button'
import { CssBaseline } from '@mui/material';
import { useReducer, useRef, useEffect } from 'react';
import './App.css';

interface MyButtonProps {
  title: string;
  disabled: boolean;
}

interface State {
  count: number;
}

type CounterAction =
  | { type: 'setCount', value: State["count"] }
  | { type: 'reset' };

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}


function MyButton({ title, disabled }: MyButtonProps) {
  return <Button variant="contained" disabled={disabled}>{title}</Button>;
}

export default function App() {

  const [state, dispatch] = useReducer(stateReducer, initialState);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // create once (lazy init)
  if (audioRef.current === null) {
    audioRef.current = new Audio(`${process.env.PUBLIC_URL}/Audio/wei.mp3`);
    audioRef.current.preload = "auto";
  }

  const start = async () => {
    const a = audioRef.current!;
    a.currentTime = 0;
    try {
      await a.play();
    } catch (err) {
      console.error("play() failed:", err);
      alert(String(err)); // temporary: helps you see if it's blocked
    }
  };

  const Wei = () => dispatch({ type: 'setCount', value: state.count + 1 });
  const reset = () => dispatch({ type: 'reset' });

  return (
    <div className="App">
      <CssBaseline />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Page Under Construction...
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=6vwFnKLamKY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MyButton title="Mambo" disabled={false} />
        </a>
        
        <p>Count: {state.count}</p>
        <div className="buttons" style={{ display: 'flex', gap: '10px' }}>
          <Button variant="contained" onClick={() => { start(); Wei();}}>Wei!</Button>
          <Button variant="contained" onClick={() => {reset();}}>Reset</Button>
        </div>
        


      </header>
    </div>
  );
}

