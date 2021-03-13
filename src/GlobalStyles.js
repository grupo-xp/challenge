import { createGlobalStyle } from "styled-components"
import "@fontsource/roboto/300.css" // Weight 500.
import "@fontsource/roboto/700.css"

export default createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

  	body {
		font-family: 'Roboto';
		background-color: rgb(22, 22, 22);
		color: white;
	}

	a {
		text-decoration: none;
	}
`;