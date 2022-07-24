import logo from './logo.svg';
import './App.css';
import {Router} from '../src/routes/Router'
import { BrowserRouter } from 'react-router-dom';
import { HeaderPage } from './components/HeaderPage/HeaderPage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderPage/>
      <Router/>
      </BrowserRouter>
      </div>
  );
}

export default App;
