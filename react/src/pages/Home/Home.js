import React from "react";
import style from "./Home.scss";
import Search from "../../component/Search";

const Home = () => (
  <>
    <Search />
    <div className={style.results}> results</div>
  </>
);

export default Home;
