import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

import { album, player } from "../../actions";

import {
  MdChevronLeft,
  MdPauseCircleFilled,
  MdPlayCircleFilled,
  MdPlayCircleOutline
} from "react-icons/md";

import classNames from "classNames";

import style from "./Album.scss";
import Cover from "../../component/Cover";
import { Link } from "react-router-dom";

const IconTogglePlay = ({ paused, isPlaying, ...props }) => {
  var ruleRender = [
    { Component: MdPlayCircleOutline, show: !isPlaying },
    { Component: MdPauseCircleFilled, show: paused },
    { Component: MdPlayCircleFilled, show: !paused }
  ];
  const { Component } = ruleRender.find(({ show }) => show);

  return <Component {...props} />;
};

const Album = ({
  find,
  play,
  currentAlbum,
  name,
  cover,
  artist,
  tracks,
  player
}) => {
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
          id={hash}
          name={name}
          cover={cover}
          artist={artist}
          className={style.album}
        ></Cover>
        <ol className={style.list}>
          {tracks.map((track, key) => {
            const { name: trackName } = track;
            const isPlaying = player.track === track;
            return (
              <li
                onClick={() => play(track, currentAlbum)}
                className={classNames(style.item, {
                  [style.active]: isPlaying
                })}
                key={key}
              >
                {trackName}
                <IconTogglePlay
                  isPlaying={isPlaying}
                  paused={player.current.paused}
                  className={style.play}
                />
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

const mapStateToProps = ({ album, player }) => ({
  ...album.current,
  currentAlbum: album.current,
  player
});

export default connect(mapStateToProps, { ...album, ...player })(Album);
