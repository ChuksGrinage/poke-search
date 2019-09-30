import React from 'react';

import styles from './SearchBar.module.css';
import search from './search.svg';
import refresh from "./loop2.svg";


interface SearchBarProps {
  onRefreshClick: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onRefreshClick }) => {
    return (
      <div>
        <form className={styles.form}>
          <input
            className={styles.searchInput}
            // value={}
            // onChange={}
            type="text"
            placeholder="Try pikachu"
          />
          <button
            className={styles.searchBtn}
            type="submit"
            // onClick={handleSearchClick}
          >
            <img src={search} alt="search icon" />
          </button>
        </form>
        { false && (
          <button onClick={onRefreshClick}>
            <img src={refresh} alt="refresh icon" />
          </button>
        )}
      </div>
    );
}

export default SearchBar;
