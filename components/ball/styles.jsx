import styled, { css } from 'styled-components';

export const Ball = styled.div`
	display: block;
	width: ${({ size }) => (size ? size : '150px')};
	height: ${({ size }) => (size ? size : '150px')};
	margin: 50px auto 0;
	border-radius: 50%;

	animation: move 20s infinite;
	${({ b1 }) =>
		b1 &&
		css`
			background-color: rgb(49, 145, 231);
			box-shadow: inset -25px -15px 40px rgba(0, 0, 0, 0.3);
			background-image: linear-gradient(
				-45deg,
				rgba(255, 255, 220, 0.3) 0%,
				transparent 100%
			);
		`}
	${({ b2 }) =>
		b2 &&
		css`
			background: radial-gradient(
				circle at 65% 15%,
				white 1px,
				#00ffdb 3%,
				#00b3ca 60%,
				#00ffdb 100%
			);
		`}
		${({ b3 }) =>
		b3 &&
		css`
			background: radial-gradient(
				circle at 65% 15%,
				white 1px,
				#ff0000 3%,
				#a40d0d 60%,
				#ff0000 100%
			);
		`};

	// Mine
	position: fixed;
	z-index: -1;

	@keyframes move {
		0% {
			transform: translate(0%, 0%);
			transform: scale(unset);
		}

		25% {
			transform: translate(60%, -10%);
			transform: scale(1.1);
		}

		50% {
			transform: translate(30%, -20%);
			transform: scale(0.8);
		}

		80% {
			transform: translate(-25%, 50%);
			transform: scale(1.3);
		}

		0% {
			transform: translate(0%, 0%);
			transform: scale(unset);
		}
	}
`;
