import logo from './emoji.png';
import React, { useEffect, useState } from "react";
import hearts from './hearts.jpg';
import capy from './capy.gif';
import './App.css';


function App() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(Date.parse("Tue May 03 2022 11:00:00 GMT")) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <div className="timer">
           {timerComponents.length ? timerComponents : <span>Time's up!</span>}

        </div>
        <div>
          <img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/u.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/n.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/t.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/i.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/l.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/blank.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/s.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/p.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/a.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/t.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/z.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/blank.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/a.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/n.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/d.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/blank.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/s.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/p.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/o.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/o.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/blank.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/r.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/e.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/u.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/n.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/i.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/t.gif" border="0" /><img src="http://www.myspacegens.com/images/glitter_text/styles/1/images/e.gif" border="0" />
        </div>
        <p>
        </p>
        <img src={capy} />


      </header>
    </div>
  );
}

export default App;
