import { useState, useRef } from 'react'

import Stopwatch from './Stopwatch'
import Start from './ButtonsStopwatch'

import Habits from './HabitsTracker/Habits'

import './App.css'

function App() {
  const [time, setTime] = useState(0);
  let timeRef = useRef(0);
  let timerRef = useRef(null)

  let handleStart = () => {
    if(timerRef.current) {
      return
    } else {
      timerRef.current = setInterval(() => {
        timeRef.current += 1;
        setTime(timeRef.current);
      }, 1000)
    }
  }

  let handleStop = () => {
    if(timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }

  let handleClear = () => {
    if(timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    timeRef.current = 0;
    setTime(timeRef.current);
  }


  return (
    <div  className="bg-violet-50 h-screen flex flex-col items-center py-10">
      <Stopwatch time={time} />
      <Start startTime={handleStart} 
              clearTime={handleClear}
              stopTime={handleStop}
              time={time}/>
      <Habits />
    </div>
  )
}

export default App
