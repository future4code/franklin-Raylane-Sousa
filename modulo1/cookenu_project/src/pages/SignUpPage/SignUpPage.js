import React from "react";
import logo from "../../assets/cadastrologo.png";
import { ScreenContainer, LogoImage } from "./styledSignUp";
import { SignUpForm } from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotectedPage";

const SignUpPage = ({ setRightButtonText }) => {
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <LogoImage src={logo} />
      <SignUpForm setRightButtonText={setRightButtonText} />
    </ScreenContainer>
  );
};

export { SignUpPage };
