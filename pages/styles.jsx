import styled from 'styled-components';

export const Container = styled.div`
	min-height: 100vh;
	display: grid;
	place-items: center;
`;
export const InnerContainer = styled.div`
	display: grid;
	place-items: center;
	img {
		min-width: 4vw;
		max-width: 10vw;
	}
`;
export const Buttons = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: center;
	gap: 1rem;
`;
