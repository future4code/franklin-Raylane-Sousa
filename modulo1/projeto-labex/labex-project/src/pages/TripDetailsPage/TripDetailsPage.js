import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams} from "react-router-dom";
import { goToLogin } from "../../routes/coordinator";

const useProtectedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      console.log("Não está logado!!!");
      goToLogin(navigate);
    }
  }, [navigate]);
};

export const TripDetailsPage = () => {
  useProtectedPage();
  const [tripDetail, setTripDetail] = useState([])
    const params  = useParams()
    const Detalhe = () => {
       
    const token = localStorage.getItem("token");
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/raylanenara/trip/${params.id}`,
        {
          headers: {
            auth: token
          }
        }
      )
      .then((response) => {
        console.log(response.data);
        setTripDetail(response.data.trips)
        console.log(tripDetail)
        
      })
      .catch((error) => {
        console.log("Deu erro: ", error.response);
      });
    }
    useEffect(Detalhe, [tripDetail, params])

  return (
  <div>
      <h1>_</h1>
      <h1>Detalhes</h1>
      
       {tripDetail &&
        tripDetail.map((detalhes) => {
          return (
            <div> 
              <p>{detalhes.name}</p>
            </div>
          );
        })}
  </div>
);
};
