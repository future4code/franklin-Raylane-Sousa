import axios from "axios";
import { BASE_URL } from "../constants/url";
import { goToRecipesList } from "../routes/coordinator";

export const login = (
  body,
  clear,
  navigate,
  setRightButtonText,
  setIsLoading
) => {
  setIsLoading(true);
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((res) => {
      //caso de sucesso
      localStorage.setItem("token", res.data.token);
      clear();
      setIsLoading(false);
      goToRecipesList(navigate);
      setRightButtonText("Logout");
    })
    .catch((err) => {
      alert(err.response.data.message);
      setIsLoading(false);
    }); //caso de erro
};

export const signUp = (body, clear, navigate, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/user/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clear();
      goToRecipesList(navigate);
      setRightButtonText("Logout");
    })
    .catch((err) => alert(err.response.data.message));
};
