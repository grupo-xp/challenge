import React from "react";
import { useParams } from "react-router-dom";
import {
  MdChevronLeft,
  MdPlayCircleFilled,
  MdPlayCircleOutline
} from "react-icons/md";

import classNames from "classNames";

import style from "./Album.scss";
import Cover from "../../component/Cover";

const Album = () => {
  const { name } = useParams();
  return (
    <>
      <nav className={style.nav}>
        <a href="#" className={style.item}>
          <MdChevronLeft /> Voltar
        </a>
      </nav>
      <div className={style.main}>
        <Cover className={style.album} name={name} artist={"artist"}></Cover>
        <ol className={style.list}>
          {Array(12)
            .fill(`Nome da faixa`)
            .map((val, key) => {
              const Play = Boolean(key % 2)
                ? MdPlayCircleFilled
                : MdPlayCircleOutline;
              return (
                <li
                  onClick={_ => _}
                  className={classNames(style.item, {
                    [style.active]: Boolean(key % 2)
                  })}
                  key={key}
                >
                  {val}
                  <Play className={style.play} />
                </li>
              );
            })}
        </ol>
      </div>
    </>
  );
};

export default Album;
