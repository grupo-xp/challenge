import React from "react";
import style from "./Cover.scss";
import PropTypes from "prop-types";
import classNames from "classNames";

export const Cover = ({ small, className, name, artist }) => (
  <div
    className={classNames(
      style.Cover,
      {
        [style.small]: small
      },
      className
    )}
  >
    <img className={style.img}></img>
    <div className={style.description}>
      <p className={style.album}>{name}</p>
      <p className={style.artist}>
        <small>{artist}</small>
      </p>
    </div>
  </div>
);

Cover.prototype = {
  onChange: PropTypes.func
};

export default Cover;
