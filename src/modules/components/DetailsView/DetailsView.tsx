/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Card } from 'modules/components';
import { Pokemon } from "modules/types";

interface DetailsViewProps {
  pokemonDetails?: Pokemon;
}

const DetailsView: React.FC<DetailsViewProps> = ({ pokemonDetails }) => {

let color;
  if (pokemonDetails && pokemonDetails.type) {
   color = ((type: string) => {
    switch (type) {
      case "poison":
      case "bug":
      case "grass":
        return "#379601";
      case "ground":
        return "#907163";
      case "rock":
      case "shadow":
      case "steel":
        return "#AAABB8";
      case "ghost":
      case "psychic":
      case "dark":
        return "#44318D";
      case "fire":
        return "#F13C30";
      case "water":
      case "ice":
        return "#4056A1";
      case "electric":
      case "dragon":
        return "#F7C331";
      case "fairy":
        return "#D83F87";
      default:
        return "white";
    }})(pokemonDetails.type)
  }

    console.log(color)

  return (
    <div
      css={css`
        height: 40vh;
        padding: 40px;
        background-color: white;
        margin: 30px auto;
        border-radius: 20px 70px;
        width: 70vw;
        position: absolute;
        left: 0;
        right: 0;
        box-shadow: inset 10px 10px 31px -2px rgba(0, 0, 0, 0.94);
        background-color: ${color};
      `}
    >
      {!pokemonDetails ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <Card name="bill" flippable spriteURL="#" onCardClick={() => console.log("hey")}/>
          <h4>{pokemonDetails.name}</h4>
          <div>{pokemonDetails.type}</div>
          <div>here {color}</div>
        </React.Fragment>
      )}
    </div>
  );
};

export default DetailsView;
