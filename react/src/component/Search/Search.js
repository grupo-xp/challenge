import React from "react";
import style from "./Search.scss";
import PropTypes from "prop-types";
import classNames from "classNames";

export const Search = ({ className, onChange }) => (
  <div className={classNames(style.search, className)}>
    <label htmlFor="search" className={style.label}>
      Busque por Artistas
    </label>
    <input
      id="search"
      className={style.input}
      onChange={onChange}
      placeholder="Comece a escrever..."
      type="search"
    ></input>
  </div>
);

Search.prototype = {
  onChange: PropTypes.func
};

export default Search;
