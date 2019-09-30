// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { Card, DetailsView } from "modules/components";
import { PokemonCard, Pokemon } from "modules/types";

import { css, jsx } from "@emotion/core";


interface LandingPageLayoutState {
  cardSelected: string;
}

interface LandingPageLayoutProps {
  pokemons: PokemonCard[];
  offSet: number;
  getPokemonDetails: any;
  pokemonDetails?: Pokemon
}

export default class LandingPageLayout extends React.Component<LandingPageLayoutProps, LandingPageLayoutState> {

  state = {
    cardSelected: ''
  }

  handleCardClick = (name: string) => {
    this.setState({ cardSelected: name},
      () => this.props.getPokemonDetails(this.state.cardSelected))
  }

  render() {
    const { cardSelected } = this.state;
    const { pokemons, offSet, pokemonDetails } = this.props;
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
        {/* <SearchBar onRefreshClick={getPokemon} /> */}
        {pokemons.length < 1 ? (
          <Loading />
        ) : (
          <div
            css={css`
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-gap: 50px;
              @media (max-width: 700px) {
                grid-template-columns: repeat(2, 1fr);
              }
            `}
          >
            {pokemons.map(({ name }, index) => {
              const id = offSet + index + 1;
              return (
                <div key={id}>
                  <Card
                    name={name}
                    spriteURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                    onCardClick={() => this.handleCardClick(name)}
                    back={<div>back</div>}
                  />
                  {(cardSelected === name) && <div css={css`height: 55vh; margin-top: 40px`}><DetailsView pokemonDetails={pokemonDetails}/></div>}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
