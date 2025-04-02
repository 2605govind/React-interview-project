import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import InputTimer from './inputTimer';
import ShowTimer from './ShowTimer';

function App() {

  const [isStart, setIsStart] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const [isPause, setIsPause] = useState(false);
  const [isFinish, setIsFinish] = useState(false);


  function resetValues() {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  }


  function hundleStart() {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert("Invalid Input");
      return;
    }
    setIsStart(true);
  }

  function hundleReset() {
    setIsStart(false);
    resetValues();
    clearInterval(timerId);

    setIsFinish(false)
  }

  function hundlePause() {
    clearInterval(timerId);
    setIsPause(true)
  }

  function hundleResume() {
    runTime(hours, minutes, seconds, timerId);
    setIsPause(false)
  }

  function hundleInputs(e) {

    let value = parseInt(e.target.value);
    if (value <= -1) {
      e.target.value = 0;
      return;
    }

    if (e.target.id === "hours") {
      setHours(value)

    } else if (e.target.id === "minutes") {
      setMinutes(value)

    } else {
      setSeconds(value)
    }
  }


  function runTime(hours, minutes, seconds, tid) {
    if (seconds > 0) {
      setSeconds((s) => s - 1);
    } else if (seconds == 0 && minutes > 0) {
      setMinutes((m) => m - 1);
      setSeconds(59);
    } else {
      setHours((h) => h - 1);
      setMinutes(59);
      setSeconds(59);
    }

    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert("Timer is finished");
      clearInterval(tid);
      resetValues();

      setIsFinish(true)
    }
  }

  useEffect(() => {
    let tid;
    if (isStart) {
      tid = setInterval(() => {
        runTime(hours, minutes, seconds, tid)
      }, 1000)
      setTimerId(tid)
    }
    return () => {
      clearInterval(tid)
    }
  }, [isStart, hours, minutes, seconds])

  return (
    <div className="App">
      <h1>Countdown Timer</h1>

      {
        !isStart && <InputTimer hundleInputs={hundleInputs} hundleStart={hundleStart} />
      }

      {
        isStart && <ShowTimer hours={hours} minutes={minutes} seconds={seconds} isPause={isPause} hundlePause={hundlePause} hundleReset={hundleReset} hundleResume={hundleResume} isFinish={isFinish} />
      }

    </div>
  );
}

export default App;
