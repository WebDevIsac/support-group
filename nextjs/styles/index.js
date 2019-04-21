import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto');

body {
    margin: 0;
    padding: 0;
    font-family: var(--font-family);
	overflow-x: hidden;
	max-width: 100%;
}

h1 {
	font-size: var(--h1-size);
	font-weight: var(--h1-weight);
	letter-spacing: var(--h1-spacing);
	line-height: 
}

h2 {
	font-size: var(--h2-size);
	font-weight: var(--h2-weight);
	letter-spacing: var(--h2-spacing);
}

h3 {
	font-size: var(--h3-size);
	font-weight: var(--h3-weight);
	letter-spacing: var(--h3-spacing);
}

p {
	font-size: var(--p-size);
	font-weight: var(--p-weight);
	letter-spacing: var(--p-spacing);
}

ul {
	margin-block-start: 0;
	margin-block-end: 0;
	margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
}

:root {
	/* Font */
	--font-family: 'Roboto';
	--h1-size: 62px;
	--h1-weight: bold;
	--h1-height: 65px;
	--h1-spacing: -1.5px;
	
	--h2-size: 40px;
	--h2-weight: bold;
	--h2-height: 44px;
	--h2-spacing: -0.5px;
	
	--h3-size: 22px;
	--h3-weight: bold;
	--h3-height: 26px;
	--h3-spacing: 0;

	--h4-size: 14px;
	--h4-weight: 300;
	--h4-height: 24px;
	--h4-spacing: 0.4px;
	
	--p-size: 16px;
	--p-weight: 500;
	--p-height: 21px;
	--p-spacing: 0.1px;

	--button-size: 20px;
	--button-weight: bold;
	--button-height: normal;
	--button-spacing: 1.25px;

	--caption-size: 16px;
	--caption-weight: 500;
	--caption-height: 21px;
	--caption-spacing: 0.4px;

	/* Color */
	--pink: #FE5A67;
	--charcoal-grey: #212121;
	--space-grey: #53585F;
	--cloud-white: #F1F5F5;
	--mist: #E7EEED;
	--milk-white: #FFFFFF;
}

`

export default GlobalStyle;