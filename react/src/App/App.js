import React from "react";
import Routes from "../routes";
import style from "./App.scss";
import { FaSpotify } from "react-icons/fa";

export const App = () => {
  //   console.log(process.env.API);
  return (
    <>
      <header className={style.header}><FaSpotify></FaSpotify></header>
      <main className={style.main}>
        <Routes />
      </main>
    </>
  );
};
export default App;
