import React, { useState } from 'react';

import styles from './SearchBar.module.css';
import { ReactComponent as SearchIcon } from './search.svg';
import { ReactComponent as Refresh } from "./loop2.svg";


interface SearchBarProps {
  onSearch: (text: string) => void;
  onRefresh: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onRefresh }) => {

  const [ text, updateText ] = useState('')

  function handleSearchButtonClick (e: any) {
    e.preventDefault()
    onSearch(text)
  }

    return (
      <div className={styles.searchBar}>
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
            <SearchIcon />
          </button>
        </form>
          <button className={styles.refreshBtn} onClick={onRefresh}>
            <Refresh />
          </button>
      </div>
    );
}

export default SearchBar;
