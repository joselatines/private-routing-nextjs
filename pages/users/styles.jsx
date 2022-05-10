import styled from 'styled-components';
import { VAR } from '../../styles/globalStyles';

export const Container = styled.div`
	table {
		border: 1px solid red;
		border-collapse: collapse;
		padding: 5px;
		min-width: 100%;
		margin: 2rem 0;
		th {
			border: 1px solid #c0c0c0;
			padding: 5px;
			background: ${VAR.colors.primary};
		}
		td {
			border: 1px solid #c0c0c0;
			padding: 5px;
		}
	}
`;
