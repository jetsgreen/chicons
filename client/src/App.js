import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { fire, facebookProvider, googleProvider } from './config/Firebase';
import Home from './pages/Home';
import Poster from "./pages/Poster";
import Seeker from "./pages/Seeker";
import Favorites from "./pages/Favorites";
import Second from "./pages/Second"


function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/apartments" component={Poster} />
          <Route exact path="/seeker" component={Seeker} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/api" component={Second}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
