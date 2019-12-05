import React from "react";
import { connect } from "react-redux";

import { search } from "../../actions/index";

import Search from "../../component/Search";
import Results from "../../component/Results";
import style from "./Home.scss";

const Home = ({ query, doFetch, ...props }) => (
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

const mapStateToProps = ({ search }) => search;
export default connect(mapStateToProps, search)(Home);
