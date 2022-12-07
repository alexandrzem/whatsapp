import React from 'react'
import styles from './Search.module.css'

const Search = ({ search, setSearch })  => {

  return(
    <div className={styles.search}>
      <input
        className={styles.input}
        type="text"
        placeholder="Search or start a new chat"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
)}

export default Search