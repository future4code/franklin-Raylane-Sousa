import React from "react";
import { InputsContainer, BtnButton, LabelText } from "./styledLogin";
import { useForm } from "./../../hooks/useForm";
import { login } from "../../services/user";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ setRightButtonText }) => {
  const [form, onChange, clear] = useForm({
    email: "",
    password: "",
  }); /* funcao que passa para o input */
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    console.log(form); //ao dar o consolelog no form voce veremos o resultado da validacao
    event.preventDefault();
    login(form, clear, navigate, setRightButtonText, setIsLoading);
  };

  return (
    //para validar o formulario colocamos onSubmit na tag de form e o button do type Submit
    <InputsContainer>
      <form onSubmit={onSubmitForm}>
        <LabelText
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
          type={"email"}
          placeholder={"Email"}
        />
        <LabelText
          name={"password"}
          value={form.password}
          onChange={onChange}
          required
          type={"password"}
          placeholder={"Senha"}
        />
        <BtnButton type={"Submit"}>
          {isLoading ? (
            <progress id="file" value="32" max="100">
              {" "}
              90%{" "}
            </progress>
          ) : (
            <>Fazer Login</>
          )}
        </BtnButton>
      </form>
    </InputsContainer>
  );
};

export { LoginForm };
