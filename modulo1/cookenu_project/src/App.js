/* import logo from './logo.svg'; */
import "./App.css";
import Router from "./routes/Router";
import { HeaderPage } from "./components/HeaderPage/HeaderPage";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token"); //pega o token do localstorage
  // se ele existir aparece logout, se não Login
  const [rightButtonText, setRightButtonText] = useState(
    token ? "Logout" : "Login"
  );

  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage
          rightButtonText={rightButtonText}
          setRightButtonText={setRightButtonText}
        />
        <Router setRightButtonText={setRightButtonText} />
      </BrowserRouter>
    </div>
  );
}

export default App;
