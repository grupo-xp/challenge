import React, { useEffect } from "react";
import PropTypes from "prop-types";
import queryString from "querystring";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { auth } from "../../actions";
import style from "./Auth.scss";

const STATE_KEY = process.env.STATE_KEY || "STATE_KEY";
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
      <button className={style.button} onClick={getToken}>
        Conecte-se ao Spotify
      </button>
    </div>
  );
};

Auth.prototype = {
  getToken: PropTypes.func,
  setToken: PropTypes.func,
  token: PropTypes.string
};

const mapStateToProps = ({ auth }) => auth;
export default connect(mapStateToProps, auth)(Auth);
