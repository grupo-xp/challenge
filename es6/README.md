# Front-end Challenge - ES6

## Sobre o teste

É bem simples. Para esse desafio vamos utilizar as API’s do Spotify.

 - Possibilidade de inserir o nome da música ou album e obter uma lista;
 - Caso um album seja procurado e retornado, quando selecionado o album, usuário será direcionado a lista de música desse album.
 - Tocar o preview da música.

### Requisitos básicos

- Você deve usar ES6;
- Você deve usar Webpack;
- Você deve criar um repositório e compartilhar com a gente;
- Você não deve usar nenhum CSS Framework (Bootstrap, PureCss, etc.);
- Sinta-se livre para estruturar seu projeto;
- Quero conseguir rodar seu projeto rodando **yarn/npm** start;
- A aplicação deve solicitar o token que será utilizado para realizar as requisições para a API;
- Persistencia do **TOKEN**, quando expirado solicitar o token novo;
- Precisamos ter certeza que nossa aplicação funciona conforme o esperado, alguns testes seriam bem vindos, sinta-se a vontade para testar com o que sente maior conforto.
- Pense que sua aplicação passará por 3 ambientes, DSV - HML - PRD, monte build e use variaveis de ambiente.



### Visual & Funcionalidades

Quando o usuário entrar na aplicação ele deve poder buscar por um album ou música. Quando realizar a busca ele deve conseguir ver todos os albuns do artista e pode interagir indo para a página do album, utilizando a url **/albums/{artist}**, por exemplo: **/albums/drake**. Ele deve conseguir voltar para essa página com o resultado da busca atual.

Quando estiver em uma tela de album ele deve ver as musicas e conseguir ouvir uma prévia da música que ele escolher, caso ele pause a música deve continuar de onde parou. Algum feedback para mostrar qual música está tocando seria legal.

### Tela principal

![](https://github.com/rodyrafa/challenge/raw/master/imgs/home_1.jpg)

![](https://github.com/rodyrafa/challenge/raw/master/imgs/home_2.jpg)

### Tela de album

![](https://github.com/rodyrafa/challenge/raw/master/imgs/list.jpg)

### Guide

![](https://github.com/rodyrafa/challenge/raw/master/imgs/guide.jpg)

## Api

Você deve utilizar as API’s do Spotify. Sua aplicação deverá aceitar um TOKEN que o usuário passará para sua aplicação.

O link da documentação da API é:

https://developer.spotify.com/web-api/endpoint-reference/

## Requisitos adicionais

Como nós somos uma das maiores instituições financeiras independentes da America latina temos que pensar em performance, escalabilidade e testes, segue alguns requisitos adicionais que seria legal ter na sua aplicação:

- Quando o usuário fizer uma requisição seria legal salvar os ultimos resultados de busca, caso ele digite e busque novamente o album nós não precisariamos fazer a requisição dessa consulta novamente.
- Quando o usuário entrar na aplicação podemos exibir uma lista com os últimos albums buscados/clicados para melhorar a experiência.
- Hoje grande parte dos acessos a sites são feitos por celular, um layout responsivo faz todo sentido para nossa aplicação!
- Nosso time de UX é bem exigente, pensam bastante na experiência do usuário, algumas animações e efeitos seriam interessantes também.

# Método de avaliação

- Boas práticas e patterns;
- Código e estrutura da aplicação;
- Componentização e fluxo do dado.
- Facilidade de leitura de código (código limpo e fácil é sempre bom **:)**)

Boa sorte e faça o teste da forma que você se sentir confortável.

**Alguma dúvida? Você pode abrir uma issue e nós podemos ajudar!**
