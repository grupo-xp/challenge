import React from "react";
import style from "./Cover.scss";
import PropTypes from "prop-types";
import classNames from "classNames";

export const Cover = ({ small }) => (
  <div
    className={classNames(style.Cover, {
      [style.small]: small
    })}
  >
    <img className={style.img}></img>
    <div className={style.description}>
      <p className={style.album}>Nome do Álbum</p>
      <p className={style.artist}>
        <small>Nome do Artista</small>
      </p>
    </div>
  </div>
);

Cover.prototype = {
  onChange: PropTypes.func
};

export default Cover;
