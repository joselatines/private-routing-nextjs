import Link from 'next/link';
import Button from '../../components/button/styles';
import { Container } from './styles';
import users from '../../users.json';

export default function Users({ usersArray }) {
	return (
		<Container>
			<h1>Users</h1>
			<table>
				<thead>
					<tr>
						<th>Username</th>
						<th>Passwords</th>
					</tr>
				</thead>
				<tbody>
					{usersArray.map(el => (
						<tr key={el.username}>
							<td>&nbsp;{el.username}</td>
							<td>&nbsp;{el.password}</td>
						</tr>
					))}
				</tbody>
			</table>

			<Link href='/'>
				<Button>Go Home</Button>
			</Link>
		</Container>
	);
}

Users.getInitialProps = async ctx => {
	// Simulating api call
	const res = await users;
	return { usersArray: res };
};
