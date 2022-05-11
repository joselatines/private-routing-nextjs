import Link from 'next/link';
import users from '../../users.json';

export default function Users({ usersArray }) {
	return (
		<div className='container'>
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
				<button>Go Home</button>
			</Link>

			<style jsx>{`
				table {
					border: 1px solid red;
					border-collapse: collapse;
					padding: 5px;
					min-width: 100%;
					margin: 2rem 0;
				}

				th {
					border: 1px solid #c0c0c0;
					padding: 5px;
					background: #2e2d36;
				}
				td {
					border: 1px solid #c0c0c0;
					padding: 5px;
				}
			`}</style>
		</div>
	);
}

Users.getInitialProps = async ctx => {
	// Simulating api call
	const res = await users;
	return { usersArray: res };
};
