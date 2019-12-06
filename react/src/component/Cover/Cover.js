import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import style from "./Cover.scss";
import PropTypes from "prop-types";
import classNames from "classNames";
import { player } from "../../actions";

export const Cover = ({
  small,
  className,
  id,
  name,
  artist,
  cover,
  playAlbum
}) => (
  <div
    className={classNames(
      style.Cover,
      {
        [style.small]: small
      },
      className
    )}
  >
    <img className={style.img} src={cover} onClick={() => playAlbum(id)}></img>
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

const mapStateToProps = () => ();

export default connect(mapStateToProps, player)(Cover);
