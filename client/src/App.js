
import './App.css';

import Game from './Game';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitleScreen from './TitleScreen';

function App() {
  

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