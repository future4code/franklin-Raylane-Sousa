import React from "react";
import {
  RecipeCardContainer,
  CardMedia,
  RecipeCardContent,
  TextCard,
} from "./styledRecipeCard";

const RecipeCard = (props) => {
  return (
    <RecipeCardContainer onClick={props.onClick}>
      <CardMedia alt={props.title} src={props.image} title={props.title} />
      <RecipeCardContent>
        <TextCard>{props.title}</TextCard>
      </RecipeCardContent>
    </RecipeCardContainer>
  );
};

export { RecipeCard };
