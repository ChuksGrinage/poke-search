/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/core";
import { Pokemon } from "modules/types";

interface DetailsViewProps {
  pokemonDetails?: Pokemon;
}

const DetailsView: React.FC<DetailsViewProps> = ({ pokemonDetails }) => {

// let color;
//   if (pokemonDetails && pokemonDetails.type) {
//    color = ((type: string) => {
//     switch (type) {
//       case "poison":
//       case "bug":
//       case "grass":
//         return "#379601";
//       case "ground":
//         return "#907163";
//       case "rock":
//       case "shadow":
//       case "steel":
//         return "#AAABB8";
//       case "ghost":
//       case "psychic":
//       case "dark":
//         return "#44318D";
//       case "fire":
//         return "#F13C30";
//       case "water":
//       case "ice":
//         return "#4056A1";
//       case "electric":
//       case "dragon":
//         return "#F7C331";
//       case "fairy":
//         return "#D83F87";
//       default:
//         return "white";
//     }})(pokemonDetails.type)
//   }


  const dropDown = keyframes`
  from {
      height: 0%;
    }

    to {
      height: 100%;
    }
`

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
        animation: ${dropDown} .8s;
      `}
    >
      {!pokemonDetails ? (
        <div>Loading...</div>
      ) : (
        <div css={css`
          display: flex;
        `}>
          <h4>{pokemonDetails.name}</h4>
          <div>{pokemonDetails.type}</div>
        </div>
      )}
    </div>
  );
};

export default DetailsView;
