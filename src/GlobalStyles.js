import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css?family=Muli:200,400,600,700'); */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* html,
	body,
	#root {
		height: 100%;
	} */

  body {
		font-family: 'Roboto';
		/* font-size: 14px; */
	}
`;