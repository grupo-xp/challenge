import React from "react";
import style from "./Results.scss";
import PropTypes from "prop-types";
import Cover from "../Cover";

export const Results = ({ title, data }) => (
  <section className={style.results}>
    <h2 className={style.title}>{title}</h2>
    <div className={style.flex}>
      {data.map(({ id, name, artist, cover }, key) => (
        <Cover
          id={id}
          key={key}
          small
          name={name}
          cover={cover}
          artist={artist}
        ></Cover>
      ))}
    </div>
  </section>
);

Results.prototype = {
  title: PropTypes.string,
  data: PropTypes.any,
  onChange: PropTypes.func
};

export default Results;
