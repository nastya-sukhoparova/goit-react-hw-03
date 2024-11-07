import React from "react";
import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => (
  <div className={styles.searchBox}>
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={onChange}
        className={styles.input}
        placeholder="Type to search..."
      />
    </label>
  </div>
);

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchBox;
