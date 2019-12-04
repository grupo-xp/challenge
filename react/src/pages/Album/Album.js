import React from "react";
import { useParams } from "react-router-dom";
import style from "./Album.scss";

const Album = () => {
  const { name } = useParams();
  return (
    <>
      <nav className={style.nav}> Voltar</nav>
      <div className={style.main}>
        <div className={style.album}>{name}</div>
        <div className={style.list}> list</div>
      </div>
    </>
  );
};

export default Album;
