import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import mainPage from './pages/MainPage';
import createdCharacters from './pages/CreatedCharacters';
import utilities from './pages/Utilities';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ mainPage }/>
      <Route exact path='/created' component={ createdCharacters }/>
      <Route exact path='/utilities' component={ utilities }/>
    </Switch>
  );
}

export default App;
