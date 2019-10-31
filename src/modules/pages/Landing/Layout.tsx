// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { Card, DetailsView } from "modules/components";
import { PokemonCard, Pokemon } from "modules/types";

import { css, jsx, keyframes } from "@emotion/core";


interface LandingPageLayoutState {
  cardSelected: string;
}

interface LandingPageLayoutProps {
  pokemons: PokemonCard[];
  offSet: number;
  getPokemonDetails: any;
  pokemonDetails?: Pokemon;
  getPokemons: () => void;
}

export default class LandingPageLayout extends React.Component<LandingPageLayoutProps, LandingPageLayoutState> {

  state = {
    cardSelected: ''
  }

  // handleCardClick(name: string) {
  //   this.setState({ cardSelected: name},
  //     () => this.props.getPokemonDetails(this.state.cardSelected))
  // }

  handleCardClick(name: string) {
    const { cardSelected } = this.state;
    let clickedCard;

    name === cardSelected
      ? (clickedCard = "")
      : (clickedCard = name);

    this.setState({
      cardSelected: clickedCard
    });
    this.props.getPokemonDetails(name)
  }

  render() {
    const { cardSelected } = this.state;
    const { pokemons, pokemonDetails, offSet } = this.props;

    const moveIn = keyframes`
  from {
        opacity: 0;
        transform: translateX(1000px);
    }

    to {
        opacity: 1;
        transform: translate(0);
    }
`


    const Loading = () => {
      return (
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 400px;
            margin: auto;
          `}
        >
          <img
            src="https://thumbs.gfycat.com/IdealPeacefulAmericanbittern.webp"
            alt="Pikachu running loading"
          />
          <img
            css={css`
              margin-top: -150px;
            `}
            src="http://dutchgramophone.com/Richer/images/loading/words.gif"
            alt="loading"
          />
        </div>
      );
    }

    return (
      <div>
        {pokemons.length < 1 ? (
          <Loading />
        ) : (
          <ul
            css={css`
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-gap: 50px;
              list-style-type: none;
              @media (max-width: 700px) {
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 10px;
                width: 100%;
              }
            `}
          >
            {pokemons.map(({ name, sprites }, index) => {
              const id = offSet + index + 1;
              const sprite = sprites ?
                sprites.front_default :
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
              return (
                <li key={index} css={css`
                    animation: ${moveIn} .8s;
                    :nth-of-type(1n){
                      animation-delay: .1s
                    }
                    :nth-of-type(2n){
                      animation-delay: .2s
                    }
                    :nth-of-type(3n){
                      animation-delay: .3s
                    }
                    :nth-of-type(4n){
                      animation-delay: .4s
                    }
                `}>
                  <Card
                    name={name}
                    spriteURL={sprite}
                    onCardClick={() => this.handleCardClick(name)}
                    back={<div>back</div>}
                  />
                  {(cardSelected === name) &&
                    <div css={css`height: 55vh; margin-top: 40px;
                    @media (max-width: 700px) {
                      width: 100%;
                    }`}>
                    <DetailsView pokemonDetails={pokemonDetails}/>
                  </div>}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    );
  }
}
