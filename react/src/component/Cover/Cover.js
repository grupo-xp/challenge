import React from "react";
import { Link } from "react-router-dom";
import style from "./Cover.scss";
import PropTypes from "prop-types";
import classNames from "classNames";

export const Cover = ({ small, className, id, name, artist, cover }) => (
  <div
    className={classNames(
      style.Cover,
      {
        [style.small]: small
      },
      className
    )}
  >
    <img className={style.img} src={cover}></img>
    <Link to={`album/${id}`} className={style.description}>
      <p className={style.album}>{name}</p>
      <p className={style.artist}>
        <small>{artist}</small>
      </p>
    </Link>
  </div>
);

Cover.prototype = {
  onChange: PropTypes.func
};

export default Cover;
