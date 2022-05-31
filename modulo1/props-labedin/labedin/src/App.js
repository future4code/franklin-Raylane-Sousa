import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import perfil from './perfil.jpeg';
import arrow from './down_arrow.png';
import teacher from './teacher.png';
import insslogo from './inss.png';
import estudante from './student.png';
import email from './email.png';
import local from './local.png';
import instagram from './insta.png';



function App() {
  const lista = ['Informática Profissional', 'Design Gráfico', 'Criação de Games', 'Análise de Dados' ];
  const listando = lista.map((cursos) =>
    <li>{cursos}</li>
  );

  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem = {perfil}
          nome="Raylane Nara" 
          descricao="Olá, eu sou a Raylane, nasci em Itaituba-Pará, cidade onde moro atualmente. 
          Sou apaixonada por música e adquirir novos conhecimentos. Amo a tecnologia pois ela nos possibilita desenvolver soluções para tornar o mundo um lugar melhor.
          "
        />
        
        <ImagemButton 
          imagem= {arrow}
          texto="Ver mais"
        />

        <CardPequeno 
         imagem= {email}
         nome="Email: "
         descricao = "usuario@dominio.com"
        />

        <CardPequeno 
         imagem= {local}
         nome="Endereço: "
         descricao = "Rua do código"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>

        <CardGrande 
         imagem= {estudante}
         nome="Centro de tecnologia da informação - CETIC - IFPA" 
         descricao= "Estágio voluntário como aluna do curso de Analise e Desenvolvimento de Sistemas."
        />

        <CardGrande 
          imagem= {insslogo}
          nome="Instituto Nacional do Seguro Social - INSS" 
          descricao= 'Estágiária de TI, triagem, orientação e informação, pesquisas e cadastros em sistemas de tecnologia e suporte.'
        />

        <CardGrande 
         imagem= {teacher}
         nome="Instrutor de Cursos Livres - Amazon Educação Profissional" 
         descricao= {listando}
        />

      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem= {instagram}
          texto="Instagram" 
        />              
      </div>
    </div>
  );
}

export default App;
