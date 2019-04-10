import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
}

:root {
	/* Font */
	--font-family: 'Roboto';
	--h1-size: 62px;
	--h1-weight: bold;
	--h1-spacing: -1.5px;
	
	--h2-size: 40px;
	--h2-weight: bold;
	
	--h3-size: 22px;
	--h3-weight: bold;
	--h1-spacing: -0.5px;
	
	--p-size: 16px;
	--p-weight: 500;
	--p-spacing: 0.1px;

	/* Color */
	--background-white: #F1F5F5;
	--background-greyish: #E7EEED;
	--grey: #212121;
	--pink: #FE5A67;
	--undertone-grey: #53585F;
}

`

export default GlobalStyle;