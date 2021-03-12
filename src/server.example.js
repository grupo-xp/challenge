// codigo disponível em:
// https://github.com/princevasconcelos/spotify-api-bridge
// a aplicação precisa esta rodando na porta 3000 (http://localhost:3000)

let express = require("express");
let request = require("request");
let querystring = require("querystring");

let app = express();

let port = process.env.PORT || 8888;
let redirect_uri = process.env.REDIRECT_URI || "http://localhost:8888/callback";

app.get("/login", function (req, res) {
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: process.env.SPOTIFY_CLIENT_ID,
        scope: "user-read-private user-read-email",
        redirect_uri,
      })
  );
});

app.get("/callback", function (req, res) {
  let code = req.query.code || null;
  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    json: true,
    form: {
      code,
      redirect_uri,
      grant_type: "authorization_code",
    },
    headers: {
      Authorization:
        "Basic " +
        new Buffer(
          process.env.SPOTIFY_CLIENT_ID +
            ":" +
            process.env.SPOTIFY_CLIENT_SECRET
        ).toString("base64"),
    },
  };

  request.post(authOptions, function (error, response, body) {
    const access_token = body.access_token;
    const refresh_token = body.refresh_token;
    let uri = process.env.FRONTEND_URI || "http://localhost:3000";
    res.redirect(
      uri + "?access_token=" + access_token + "&refresh_token=" + refresh_token
    );
  });
});

app.listen(port);
