import React from 'react';
import styled from 'styled-components'
import background from './bg.jpg'

//Container principal 
const AppContainer = styled.div`
  border: 3px solid black;
  height: 100vh;
  box-sizing: border-box;
  width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-image: url(${background});

`
const Tittle = styled.div`
  font-size: 20px;
  color: #000000;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  background-color: #ffffff;
`
//Container menssagens
const MessageContainer = styled.div`
  flex-grow:1;
  padding: 16px;
  display: flex;
  flex-direction: column-reverse;
`

//Container Inputs

const InputsContainer = styled.div `
  display: flex;

`
//Inputs componentes

const NameInput = styled.input `
  width: 100px;
  border-radius: 10px;
`

const MessageInput = styled.input`
  flex-grow: 1;
  border-radius: 10px;
`

const MsgBox1 = styled.div`

background-color:#DDF7C8;
align-self: flex-end;
margin: 10px;
border-radius: 10px;
padding: 10px;
`

const MsgBox2 = styled.div`

background-color:grey;
align-self: flex-start;
margin: 10px;
border-radius: 10px;
padding: 10px;
`
const BtnEnviar = styled.button `
  background-color: gray;
    border-radius: 10px;
    color: white;
    padding: 15px 30px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 10px;
    margin: 4px 2px;
    cursor: pointer;
`
//tecnica dos inputs controlados, diz que tenho no estado uma variavel que representa cada um dos inputs
//cada vez que o ususario digita o estado do input é atualizado
//para utilizar estado e armazenar informações em inputs é necessario o componente de classe 
class App extends React.Component {
  state = {   //objeto de estado
    messages: [],  //array lista de mensagens
    userValue: '',  //variaveis de estado para ter acesso ao valor de cada um dos inputs
    messageValue: ''  //valores referente ao input e nao ao conteudo da mensagem 
  }

  //funcoes de atualização do estado dos inputs
  //serão passadas para os inputs pela prop onChange{}
  onChangeUserValue = (event) => {   //função que atualiza o estado, a cada vez que o input é atualizado 
    this.setState({userValue: event.target.value}) // modelo para input controlado com event
  }

  onChangeMessageValue = (event) => {
    this.setState({messageValue: event.target.value})
  }

  // funcao de enviar mensagem
  sendMessage = () => {
    const newMessage = {
      user: this.state.userValue,
      text: this.state.messageValue
    }

    const newMessageArray = [newMessage, ...this.state.messages]

    this.setState({messages: newMessageArray, userValue:'', messageValue:''})
  }


  render () {
    return (
      <AppContainer>
        <Tittle>Whatslab</Tittle>
        <MessageContainer>
        {this.state.messages.map((message) => {

           if (message.user === "user") {
               return (
                <MsgBox1>
                <strong>{message.user}</strong>: {message.text}
              </MsgBox1>
               //Quando o nome do usuário for "eu", o balão 
               //só vai mostrar o conteúdo da mensagem
               )
           } else {
               return (
                   <MsgBox2>
                   <strong>{message.user}</strong>: {message.text}
                 </MsgBox2>
               //Quando o nome do usuário for qualquer outra coisa, 
               //o balão vai mostrar o nome do usuário e o conteúdo da mensagem
               )
           }
          })}

        </MessageContainer>

        <InputsContainer>
          <NameInput 
          onChange={this.onChangeUserValue} 
          value={this.state.userValue} 
          placeholder={'Nome'}/>

          <MessageInput 
          onChange={this.onChangeMessageValue} 
          value={this.state.messageValue} 
          placeholder={'Mensagem'}/>
          <BtnEnviar onClick={this.sendMessage}>Enviar</BtnEnviar>
        </InputsContainer>
        
      </AppContainer>
  );
  }
}

export default App;
