
import './App.css';

import Game from './Game';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitleScreen from './TitleScreen';

function App() {
  const [count, setCount] = useState(0);


  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/testing">
            <h1>Test Route</h1>
          </Route>
          <Route path = "/pacman">
            <Game />
          </Route>
          <Route path="/">
           <TitleScreen />
          </Route>
          <Route path="/losingScreen">
           <losingScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;