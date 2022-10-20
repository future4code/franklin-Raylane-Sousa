import { BrowserRouter, Outlet} from 'react-router-dom';
import Header from './components/header/Header';
import Router from './routes/Router';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Outlet/>
      <Router/>
    </BrowserRouter>
    </div>
  );
}

export default App;
