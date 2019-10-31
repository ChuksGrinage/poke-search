/** @jsx jsx */
import React from "react";
import { css, jsx, keyframes } from "@emotion/core";
import { Pokemon } from "modules/types";

import styles from './DetailsView.module.css';

interface DetailsViewProps {
  pokemonDetails?: Pokemon;
}

const DetailsView: React.FC<DetailsViewProps> = ({ pokemonDetails }) => {
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
          padding: 40px;
        `}>
          <h4 css={css`font-size: 40px;`}>{pokemonDetails.name}</h4>
          <div>{pokemonDetails.type}</div>
        </div>
      )}
    </div>
  );
};

export default DetailsView;
