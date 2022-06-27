import logo from './logo.svg';
import './App.css';
import {EtapaUm} from './components/EtapaUm'
import {EtapaDois} from './components/EtapaDois'
import {EtapaTres} from './components/EtapaTres'
import { Final } from './components/Final'
import { Inicio } from './components/Inicio'
import {useState} from 'react'
import styled from 'styled-components'
 
const BtnProximo = styled.button `
  background-color: gray;
  color: #220456;
  width: 200px;
  border: 2px solid black;
  padding: 5px;
  margin: 20px;
  font-size: 20px;
  border-radius: 8px;
` 
const ContainerForm = styled.div `
background-color: white;
color: black;
border: 5px double black;
border-radius: 10px;
padding-right: 100px;
padding-left: 100px;

`

function App() {
  const [etapa, setEtapa] = useState(0) 
  
  const renderizarEtapa = () => {
   //UTILIZANDO IF ELSE
    /*  if (etapa === 1) {
      return <EtapaUm/>
    } else if (etapa === 2 ) {
      return <EtapaDois/> 
    } else if (etapa === 3) {
      return <EtapaTres/>
    } else if (etapa === 4) {
      return <Final/>
    } */
//UTILIZANDO SWITCH CASE
    switch (etapa){ 
      case 1: 
        return <EtapaUm/>
        break;
      case 2: 
        return <EtapaDois/>
        break;
      case 3: 
        return <EtapaTres/>
        break;
      case 4:
        return <Final/>
      default:
        return <Inicio/>
    } 
  }

  const irParaProximaEtapa = () => {
    if (etapa > 4 ) {
      return setEtapa(0)
    } else {
      return setEtapa(etapa+1)
    }
  }

  return (
    <div className="App">
      <h1>Formulário de Cadastro</h1>
      <ContainerForm>
      {renderizarEtapa()}
      <BtnProximo onClick={irParaProximaEtapa}>Próximo</BtnProximo>
      </ContainerForm>
    </div>
  );
}

export default App;
