import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch } from 'react-router';
import mainPage from './pages/MainPage';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ mainPage }/>
    </Switch>
  );
}

export default App;
