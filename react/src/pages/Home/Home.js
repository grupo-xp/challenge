import React from "react";
import { connect } from "react-redux";

import { search } from "../../actions/index";

import Search from "../../component/Search";
import Results from "../../component/Results";
import style from "./Home.scss";

const Home = ({ query, cache, lastsQuery, ...props }) => {
  const size = lastsQuery.length - 1;
  const firstSession = lastsQuery[size];
  const secondSession = lastsQuery[size - 1];
  const max = secondSession && !query ? 6 : undefined;
  const data = cache[firstSession] || [];
  return (
    <>
      <Search className={style.search} />
      {!data.length ? (
        <h2>Suas consultas aparecerão aqui</h2>
      ) : (
        <Results
          title={
            query
              ? `Resultados encontrados para "${query}"`
              : "Álbuns buscados recentemente"
          }
          data={data.slice(0, max)}
        />
      )}
      {!query && secondSession && (
        <Results
          title="Álbuns buscados recentemente"
          data={cache[secondSession].slice(0, max)}
        />
      )}
    </>
  );
};

const mapStateToProps = ({ search }) => search;
export default connect(mapStateToProps, search)(Home);
