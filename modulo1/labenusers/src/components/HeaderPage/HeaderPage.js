import React from "react";
import logo from '../../assets/logo.svg'
import { HeaderContainer, HeaderImg, Title} from "./StyledHeader";


export const HeaderPage = () => {
  return (
    <HeaderContainer>
      <HeaderImg src={logo}/>
      <Title>LabeUsers</Title>
    </HeaderContainer>
  );
};
