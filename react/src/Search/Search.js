import React from "react";
import Routes from "../../routes";
import style from "./App.scss";

export const App = () => {
  //   console.log(process.env.API);
  return (
    <>
      <header className={style.header}>🎵</header>
      <main className={style.main}>
        <Routes />
      </main>
    </>
  );
};
export default App;
