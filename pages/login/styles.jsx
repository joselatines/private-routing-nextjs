import styled from 'styled-components';
import { VAR } from '../../styles/globalStyles';

export const Container = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
`;

export const Form = styled.form`
	padding: 3rem;
	max-width: 60vw;
	min-height: 50vh;
	margin-bottom: 2rem;

	background: rgba(46, 45, 54, 0.25);
	/* 	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37); */
	backdrop-filter: blur(8.5px);
	-webkit-backdrop-filter: blur(20px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	button {
		width: -webkit-fill-available;
	}
`;

export const Input = styled.input`
	outline: none;
	min-width: 10rem;
	border: solid 3px ${VAR.colors.secondary};
	border-radius: 5px;
	padding: 1rem;
	opacity: 0.5;
	&:focus {
		border-color: ${VAR.colors.primary};
	}
`;
export const Inputs = styled.div`
	display: grid;
	gap: 1rem;
	margin: 2rem 0 2.5rem;
`;

export const Error = styled.span`
	color: ${VAR.colors.danger};
	font-weight: bolder;
`;
