import React, { useState } from 'react';

import styles from './SearchBar.module.css';
import search from './search.svg';
import refresh from "./loop2.svg";


interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {

  const [ text, updateText ] = useState('')

  function handleSearchButtonClick (e: any) {
    e.preventDefault()
    onSearch(text)
  }

    return (
      <div>
        <form className={styles.form}>
          <input
            className={styles.searchInput}
            value={text}
            onChange={(e) => updateText(e.target.value)}
            type="text"
            placeholder="Try pikachu or 25"
          />
          <button
            className={styles.searchBtn}
            type="submit"
            onClick={(e) => handleSearchButtonClick(e)}
          >
            <img src={search} alt="search icon" />
          </button>
        </form>
        { false && (
          <button>
            <img src={refresh} alt="refresh icon" />
          </button>
        )}
      </div>
    );
}

export default SearchBar;
