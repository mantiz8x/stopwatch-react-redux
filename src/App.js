import './App.css';
import { useState } from 'react';
import { useMemo } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { update } from './features/stopwatch/stopwatchSlice';

function App() {
  const { elapsed } = useSelector(state => state.stopwatch);
  const dispatch = useDispatch();
  const [running, setRunning] = useState(false);
  
  const hours = useMemo(() => parseInt(elapsed / 60 / 60), [elapsed]);
  const minutes = useMemo(() => {
    let temp = parseInt(elapsed / 60);
    if (temp >= 60) {
      temp = temp / 60
    }
    return parseInt(temp);
  }, [elapsed]);
  const seconds = useMemo(() => elapsed % 60, [elapsed]);

  console.log(minutes);
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        dispatch(update(elapsed + 1));
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [running, elapsed, dispatch]);


  const startTimer = () => {
    setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resumeTimer = () => {
    setRunning(true);
  };

  const resetTimer = () => {
    setRunning(false);
    dispatch(update(0));
  };

  return (
    <div className="App">
      <div className='display'>
        <h1 className='segment'>{hours}</h1>
        <h1 className='separator'>:</h1>
        <h1 className='segment'>{minutes}</h1>
        <h1 className='separator'>:</h1>
        <h1 className='segment'>{seconds}</h1>
      </div>
      <div>
        <button
          onClick={startTimer}
          className='btn'
          disabled={running}
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className='btn'
          disabled={!running}
        >
          Stop
        </button>
        <button
          onClick={resumeTimer}
          className='btn'
          disabled={running}
        >
          Resume
        </button>
        <button
          onClick={resetTimer}
          className='btn'
          // disabled={}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
