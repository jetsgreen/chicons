import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Poster from "./pages/Poster";
import Seeker from "./pages/Seeker";
import Favorites from "./pages/Favorites";


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apartments" component={Poster} />
          <Route exact path="/seeker" component={Seeker} />
          <Route exact path="/favorites" component={Favorites} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
