import styled from "styled-components";

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px;
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
  justify-content: center;
`;

export const CardMedia = styled.img`
  width: 100%;
  border: outset 5px;
`;

export const RecipeCardContent = styled.div`
  height: auto;
  justify-content: center;
  display: flex;
`;

export const TextCard = styled.h3`
  text-align: center;
  margin: 5px;
`;
