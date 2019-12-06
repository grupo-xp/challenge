import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classNames";
import { connect } from "react-redux";

import { search } from "../../actions/index";

import style from "./Search.scss";
import useDebounce from "../../hoc/use-debounce";

export const Search = ({ className, query, onChange }) => {
  const [value, setValue] = useState(query);
  const lastValue = useDebounce(value, 500);
  const handleChange = e => setValue(e.target.value);

  useEffect(() => {
    onChange(lastValue);
  }, [lastValue]);

  return (
    <div className={classNames(style.search, className)}>
      <label htmlFor="search" className={style.label}>
        Busque por Artistas
      </label>
      <input
        id="search"
        className={style.input}
        onChange={handleChange}
        placeholder="Comece a escrever..."
        type="search"
        value={value}
      ></input>
    </div>
  );
};

Search.defaultProps = {
  query: "",
  onChange: _ => _
};

Search.prototype = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  query: PropTypes.string
};

const mapStateToProps = state => state.search;

export default connect(
  mapStateToProps,
  search
)(({ find, reset, ...props }) =>
  Search({
    onChange: value => (value ? find(value) : reset()),
    ...props
  })
);
