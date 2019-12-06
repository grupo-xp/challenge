import React from "react";

import { Link } from "react-router-dom";

import Routes from "../routes";
import style from "./App.scss";

import { FaSpotify } from "react-icons/fa";

export const App = () => {
  return (
    <>
      <header className={style.header}>
        <Link to="/" className={style.item}>
          <FaSpotify />
        </Link>
      </header>
      <main className={style.main}>
        <Routes />
      </main>
    </>
  );
};
export default App;
