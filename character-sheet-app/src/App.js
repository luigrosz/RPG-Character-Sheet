import { Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import createCharacter from './pages/CreateCharacter';
import createdCharacters from './pages/CreatedCharacters';
import utilities from './pages/Utilities';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ createCharacter }/>
      <Route exact path='/created' component={ createdCharacters }/>
      <Route exact path='/utilities' component={ utilities }/>
    </Switch>
  );
}

export default App;
