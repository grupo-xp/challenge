// import React, { c, useEffect } from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Redirect,
//     Link as RouterLink,
//     useHistory,
//     useLocation,
//     useParams,
//     useRouteMatch,
// } from "react-router-dom";
// import Service from 'service'
// import { ReactComponent as SpotifyLogo } from 'assets/spotify.svg';
// import { ReactComponent as BackIcon } from 'assets/back.svg';
// import styled from 'styled-components'
// // import { media } from 'theme'

// // import Home from 'pages/Home'
// // import Album from 'pages/Album'



// // function Link ({ to, children }) {
// //     return (
// //         <RouterLink to={to}>{children}</RouterLink>
// //     )
// // }








// // HOME
// const SpotifyLogoContainer = styled.div`
//   width: 64px;
//   height: 64px;
//   top: 32px;
//   left: 32px;

//   @media (min-width: ${theme.media.sm}) {
//     position: absolute;
//     width: 48px;
//     height: 48px;
//   }
// `

// https://accounts.spotify.com/pt-BR/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-private%2Buser-read-email%26response_type%3Dcode%26redirect_uri=&show_dialog=false&client_id=0a3579a645674bcd81f7ca869f088763

// https://accounts.spotify.com/pt-BR/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-read-private%2Buser-read-email%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252F2fdrowg6rf.execute-api.us-west-2.amazonaws.com%252Fprod%252Fcallback%26show_dialog%3Dfalse%26client_id%3D004d8c0ab5eb44a48556c2e4122e4cb9
// // https://accounts.spotify.com/authorize?client_id=0a3579a645674bcd81f7ca869f088763&response_type=code&redirect_uri=https%3A%2F%2Fprincevasconcelos.github.io%2Fchallenge-1&scope=user-read-private%20user-read-email&state=34fFs29kd09
// https://accounts.spotify.com/pt-BR/login?continue=https://accounts.spotify.com/authorize?client_id=0a3579a645674bcd81f7ca869f088763&response_type=code&redirect_uri=https://princevasconcelos.github.io/challenge-1&scope=user-read-private%20user-read-email&state=34fFs29kd09
// https://accounts.spotify.com/pt-BR/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fclient_id%3D0a3579a645674bcd81f7ca869f088763&response_type=code&redirect_uri=https:%2F%2Fprincevasconcelos.github.io%2Fchallenge-1&scope=user-read-private%20user-read-email&state=34fFs29kd09
// const RootContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin: 24px 32px;
//   background: crimson;

//   @media (min-width: ${theme.media.sm}) {
//     margin: ${props => (props.margin ? props.margin : '50px 140px')};
//   }

//   div:not(:first-child) {
//     margin-top: 24px;
//   }
// `

// const SearchContainer = styled.div`
//   display: flex;
//   width: 100%;
// `

// function Home () {
//     const history = useHistory()

//     useEffect(() => {
//         console.log(process.env.REACT_APP_AUTH_URL)
//     }, [])

//     const goToAlbum = () => history.push('/albums/mc-kevinho')

//     return (
//         <RootContainer>
//             <SpotifyLogoContainer>
//                 <SpotifyLogo fill="white" />
//             </SpotifyLogoContainer>

//             <SearchContainer>
//                 <Search />
//             </SearchContainer>

//             <button onClick={goToAlbum}>Album</button>

//         </RootContainer>
//     )
// }

// // ALBUM
// const BackLogoContainer = styled.div`
//     display: flex;
//     width: 100%;
//     height: 8px;
//     align-items: center;

//     svg {
//         height: 12px;
//     }

//     a {
//         font-size: 18px;
//         text-decoration: none;
//         color: white;
//         margin-left: 8px;
//     }

//   /* @media (min-width: ${theme.media.sm}) {
//     position: absolute;
//     width: 48px;
//     height: 48px;
//   } */
// `

// function Album () {
//     let { artist } = useParams();
//     return (
//         <RootContainer margin="50px 50px 30px 140px">
//             <SpotifyLogoContainer>
//                 <SpotifyLogo fill="white" />
//             </SpotifyLogoContainer>
//             {/* Album para o artista {artist} */}
//             <BackLogoContainer>
//                 <BackIcon fill="white" />
//                 <a href="/">Voltar</a>
//             </BackLogoContainer>
//         </RootContainer>
//     )
// }

// export default function Routes() {
//     return (
//       <Router>
//           <Switch>
//             <Route exact path="/">
//                 <Home />
//             </Route>
            
//             <Route path="/albums/:artist">
//               <Album />
//             </Route>

//             {/* <Route path="*">
//                 <Redirect to="/" />
//             </Route> */}
//           </Switch>
//       </Router>
//     );
// }