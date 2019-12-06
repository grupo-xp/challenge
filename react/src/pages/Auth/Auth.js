import React, { useEffect } from "react";
import PropTypes from "prop-types";
import queryString from "querystring";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../actions";
import style from "./Auth.scss";

const STATE_KEY = process.env.STATE_KEY || "STATE_KEY";
const CLIENT_ID = process.env.CLIENT_ID;
export const Auth = ({ getToken, setToken, token }) => {
  useEffect(() => {
    if (!location.hash) return;
    const { access_token, state } = queryString.parse(
      location.hash.replace("#", "")
    );
    const storedState = sessionStorage.getItem(STATE_KEY);
    if (state !== storedState) return getToken();
    sessionStorage.removeItem(STATE_KEY);
    setToken(access_token);
  }, []);
  return token ? (
    <Redirect to="/" />
  ) : (
    <div className={style.auth}>
      {CLIENT_ID ? (
        <button className={style.button} onClick={getToken}>
          Conecte-se ao Spotify
        </button>
      ) : (
        <div>
          <h1>Você precisa de um CLIENT_ID</h1>
          <p>
            Para se conseguir uma CLIENT_ID{" "}
            <a href="https://developer.spotify.com/dashboard/applications">
              acesse o dash de desenvolvedores do spotify
            </a>
            , após isso basta criar um arquivo <code>.env</code> na raiz do
            projeto com chave e valor e reiniciar a aplicação
          </p>
          <pre>CLIENT_ID=Valor do CLIENT_ID</pre>
          <p>
            *Lembre-se de configurar o Redirect da app{" "}
            <code>http://localhost:3000/auth</code>
          </p>
        </div>
      )}
    </div>
  );
};

Auth.prototype = {
  getToken: PropTypes.func,
  setToken: PropTypes.func,
  token: PropTypes.string
};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps, auth)(Auth);
