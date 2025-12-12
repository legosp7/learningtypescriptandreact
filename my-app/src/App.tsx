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

  useEffect(() => {
    audioRef.current = new Audio('learningtypescriptandreact/Audio/wei.mp3');

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
        audioRef.current.load();
      }
    }
  }, []);

  
  const start = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    a.play().catch(() => {});
  }

  const Wei = () => dispatch({ type: 'setCount', value: state.count + 1 });
  const reset = () => dispatch({ type: 'reset' });

  return (
    <div className="App">
      <CssBaseline />
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
        <a><MyButton title="Oguri as in Peak" disabled={false} /></a>
        <p>Count: {state.count}</p>
        <div className="buttons" style={{ display: 'flex', gap: '10px' }}>
          <Button variant="contained" onClick={() => {Wei(); start();}}>Wei!</Button>
          <Button variant="contained" onClick={() => {reset();}}>Reset</Button>
        </div>
        


      </header>
    </div>
  );
}

