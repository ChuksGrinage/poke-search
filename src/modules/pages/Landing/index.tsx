import React, { Component } from 'react';
import axios from "axios";
import { MainLayout } from 'modules/layouts';
import { SearchBar } from "modules/components";
import LandingPageLayout from './Layout';
import { PokemonCard, Pokemon } from 'modules/types';

const API = 'https://pokeapi.co/api/v2/pokemon/';
const offSet = Math.floor(Math.random() * (200 - 1)) + 1;


interface LandingPageProps {}

interface LandingPageState {
  pokemons: PokemonCard[],
  pokemonDetails?: Pokemon,
  searched: boolean
}

class LandingPage extends Component<LandingPageProps, LandingPageState> {
  constructor(props: LandingPageProps) {
    super(props);
    this.state = {
      pokemons: [],
      pokemonDetails: undefined,
      searched: false
    };
    this.getPokemonDetails = this.getPokemonDetails.bind(this);
    this.searchPokemons = this.searchPokemons.bind(this);
    this.getPokemons = this.getPokemons.bind(this);
  }

  componentDidMount() {
    this.getPokemons();
  }

  async getPokemons() {
    const res = await axios.get(`${API}?limit=50&offset=${offSet}`);
    const pokemons = res.data.results;
    console.log(pokemons)
    this.setState({ pokemons, searched: false });
  }

  async searchPokemons(pokemon: string) {
    const res = await axios.get(`${API}${pokemon}`);
    const searchedPokemon = res.data;
    let pokemons;
    if (this.state.searched) {
      pokemons = [...this.state.pokemons, searchedPokemon]
    } else {
      pokemons = [searchedPokemon]
    }
    this.setState({ pokemons, searched: true })
  }

  async getPokemonDetails(name: string) {
    const res = await axios.get(`${API}${name}`);
    const data = res.data;
    this.setState({
      pokemonDetails: {
        id: data.id,
        name: data.name,
        type: data.types[0].type.name,
        moves: data.moves,
        sprite: data.sprites.front_default
      }
    });
  }

  render() {
    console.log(this.state.pokemons)
    return (
      <MainLayout>
        <SearchBar onSearch={this.searchPokemons} onRefresh={this.getPokemons} />
        <LandingPageLayout
          pokemons={this.state.pokemons}
          offSet={offSet}
          getPokemonDetails={this.getPokemonDetails}
          getPokemons={this.getPokemons}
          pokemonDetails={this.state.pokemonDetails}
        />
      </MainLayout>
    );
  }
}


export default LandingPage;