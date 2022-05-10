import styled, { createGlobalStyle } from 'styled-components';

export const VAR = {
	colors: {
		primary: '#2E2D36',
		secondary: '#fff',
		danger: '#ef233c',
		bg: '#080710',
		gray: '#666666',
		dark_gray: '#222',
		white: '#fff',
		font: '#fff',
	},
	font: {
		size: '16px',
		family: '-apple-system',
		light: 300,
		regular: 400,
		medium: 600,
		bold: 700,
		black: 900,
	},
	mediaQueries: {
		responsive: '50em',
		mobile: '315px',
		mobile_l: '425px',
		mobile_xl: '535px',
		tablet: '768px',
		laptop: '1024px',
	},
	transitions: {
		css: '.3s ease-in-out',
		duration: 1,
		ease: 'easeInOut',
	},
};

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
	
    body {
        font-family: ${VAR.font.family}, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: ${VAR.colors.bg};
        color:  ${VAR.colors.font};
        font-size: ${VAR.font.size};
		@media screen and (min-width: 320px) {
    		font-size: calc(${VAR.font.size} + 6 * ((100vw - 320px) / 680));	
		}

		@media screen and (min-width: 1000px) {
   			font-size: 22px;
		}

        // Project setting
        padding: 0 6rem;
    }

	a {
		all: unset;
		cursor: pointer;
		width: fit-content;
		&:hover {
			color: ${VAR.colors.primary};
		}
	}

	`;

/* export const StyledLink = styled(Link)`
	&:hover {
		color: unset;
	}
`;
 */
