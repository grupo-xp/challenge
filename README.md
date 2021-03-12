# Spotify App

Aplicação em React que utiliza a API do spotify

### Overview

A aplicação funciona de uma maneira bem simples. Ao carregar a página inicial,
uma requisição é feita para um serviço (https://spotify-api-bridge.herokuapp.com/login)
criado para logar e receber um access_token do Spotify. Esse serviço está hospedado no
heroku, mas o código fonte se encontra na arquivo (server.example.js). Feito isso, o token
é salvo no localStorage e a aplicação pode a partir de agora usar esse token para fazer
as buscas por albums e artistas na API do Spotify.

### Stack

1. [ReactJs](https://pt-br.reactjs.org/)
2. [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
3. [Styled Components](https://styled-components.com/)
4. [Jest](https://jestjs.io/)
5. [React Testing Library](https://testing-library.com/)
6. [Webpack](https://webpack.js.org/)

### Executar aplicação para desenvolvimento local

```
npm run start
```

### Executar testes

```
npm run test
```
