import React from "react";
import Search from "../../component/Search";
import Results from "../../component/Results";
import style from "./Home.scss";

export const Home = ({ query }) => (
  <>
    <Search className={style.search} />
    {query ? (
      <Results
        title={`Resultados encontrados para "${query}"`}
        data={Array(10).fill(`Nome do Album`)}
      />
    ) : (
      <>
        <Results
          title="Álbuns buscados recentemente"
          data={Array(5).fill(`Nome do Album`)}
        />
        <Results
          title="Álbuns buscados recentemente"
          data={Array(5).fill(`Nome do Album`)}
        />
      </>
    )}
  </>
);

export default () => Home({ query: "Bob" });
