// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsx jsx */

import React from "react";
import { Card, DetailsView, SearchBar } from "modules/components";
import { PokemonCard, Pokemon } from "modules/types";

import { css, jsx } from "@emotion/core";


interface LandingPageLayoutState {
  cardSelected: string;
}

interface LandingPageLayoutProps {
  pokemons: PokemonCard[];
  // offSet: number;
  getPokemonDetails: any;
  pokemonDetails?: Pokemon;
  searchPokemons: (pokemon: string) => void;
}

export default class LandingPageLayout extends React.Component<LandingPageLayoutProps, LandingPageLayoutState> {

  state = {
    cardSelected: ''
  }

  handleCardClick = (name: string) => {
    this.setState({ cardSelected: name},
      () => this.props.getPokemonDetails(this.state.cardSelected))
  }

  handleSearch = (pokemon: string) => {
    this.props.searchPokemons(pokemon);
  };

  render() {
    const { cardSelected } = this.state;
    const { pokemons, pokemonDetails } = this.props;

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
        <SearchBar onSearch={this.handleSearch} />
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
            {pokemons.map(({ name, sprites }, index) => {
              // const id = offSet + index + 1;
              return (
                <div key={index}>
                  <Card
                    name={name}
                    spriteURL={sprites.front_default}
                    onCardClick={() => this.handleCardClick(name)}
                    back={<div>back</div>}
                    // render={(display, setDisplay) => (
                    //   <div>
                    //     {display && <div>working</div>}
                    //     <button onClick={() => setDisplay(!display)}>click</button>
                    //   </div>
                    // )}
                  />
                  {(cardSelected === name) && <div css={css`height: 55vh; margin-top: 40px;`}>
                    <DetailsView pokemonDetails={pokemonDetails}/>
                  </div>}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
