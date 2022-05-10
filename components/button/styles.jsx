import styled, { css } from 'styled-components';
import { VAR } from '../../styles/globalStyles';

const Button = styled.button`
	all: unset;
	cursor: pointer;
	font-size: ${({ size }) => (size ? size : '1em')};
	text-align: center;
	width: max-content;
	background-color: ${({ color }) => (color ? color : VAR.colors.primary)};
	background-color: ${({ danger }) => danger && VAR.colors.danger};
	color: ${({ color }) => (color ? color : VAR.colors.white)};
	padding: 0.5em 2em;
	border: 3px solid transparent;
	border-radius: 5px;
	// For icons
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5em;
	i {
		font-size: 1.2em;
	}
	a {
		all: unset;
	}
	transition: all ${VAR.transitions.css};
	&:hover {
		transform: scale(1.05);
	}
	${({ outline }) =>
		outline &&
		css`
			background-color: transparent;
			color: ${VAR.colors.white};
			border: 3px solid ${VAR.colors.white};
			&:hover {
				color: ${VAR.colors.white};
				border: 3px solid transparent;
				background-color: ${VAR.colors.primary};
			}
		`}
`;
export default Button;
