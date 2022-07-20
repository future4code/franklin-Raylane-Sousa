import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { HeaderPage } from './components/HeaderPage/HeaderPage'
import { Router } from './routes/Router';


function App() {


  return (
      <BrowserRouter>
        <HeaderPage/>
        <Router/>
      </BrowserRouter>
  );
}

export default App;
