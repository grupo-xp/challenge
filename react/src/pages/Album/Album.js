import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { album } from "../../actions";

import {
  MdChevronLeft,
  MdPlayCircleFilled,
  MdPlayCircleOutline
} from "react-icons/md";

import classNames from "classNames";

import style from "./Album.scss";
import Cover from "../../component/Cover";
import { Link } from "react-router-dom";

const Album = ({ find, name, cover, artist, tracks }) => {
  const { hash } = useParams();
  useEffect(() => {
    find(hash);
  }, []);

  return (
    <>
      <nav className={style.nav}>
        <Link to="/" className={style.item}>
          <MdChevronLeft /> Voltar
        </Link>
      </nav>
      <div className={style.main}>
        <Cover
          className={style.album}
          cover={cover}
          name={name}
          artist={artist}
        ></Cover>
        <ol className={style.list}>
          {tracks.map(({ name: trackName, preview_url }, key) => {
            const Play = Boolean(key % 2)
              ? MdPlayCircleFilled
              : MdPlayCircleOutline;
            return (
              <li
                onClick={async () => {
                  const audio = await new Audio(preview_url);
                  audio.play();
                }}
                className={classNames(style.item, {
                  [style.active]: Boolean(key % 2)
                })}
                key={key}
              >
                {trackName}
                <Play className={style.play} />
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

Album.defaultProps = {
  tracks: []
};

Album.prototype = {
  className: PropTypes.string,
  find: PropTypes.func,
  name: PropTypes.string,
  cover: PropTypes.string,
  artist: PropTypes.string,
  tracks: PropTypes.array
};

const mapStateToProps = ({ album }) => album.current;
export default connect(mapStateToProps, album)(Album);
