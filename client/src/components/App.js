import Game from './Game';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TitleScreen from './TitleScreen';

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path = "/pacman">
            <Game />
          </Route>
          <Route path="/">
           <TitleScreen />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;