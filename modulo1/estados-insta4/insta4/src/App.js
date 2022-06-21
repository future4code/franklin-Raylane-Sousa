import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';
import hayleyP from './img/hayleyP.webp';
import hayleyPost from './img/hayleyPost.jpg';
import taylorP from './img/taylorP.jpg';
import taylorPost from './img/taylorPost.jpg';
import zacP from './img/zacP.webp';
import zacPost from './img/zacPost.jpg';



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
`
function App() {
return(
  <MainContainer>
    <Post
      urlP= {'https://www.instagram.com/yelyahwilliams/?hl=pt-br'}
      nomeUsuario={'Hayley Williams'}
      fotoUsuario={hayleyP}
      fotoPost={hayleyPost}
    />

   <Post
      urlP= {'https://www.instagram.com/tayloryorkyall/'}
      nomeUsuario={'Taylor York'}
      fotoUsuario={taylorP}
      fotoPost={taylorPost}
    />

    <Post
      urlP= {'https://www.instagram.com/zacfarro/'}
      nomeUsuario={'Zac Farro'}
      fotoUsuario={zacP}
      fotoPost={zacPost}
    />
  </MainContainer>

)

}


export default App;
