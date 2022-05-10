import Link from 'next/link';
import Button from '../../components/button/styles';
import withPrivateRoute from '../../components/withPrivateRoute';

const Dashboard = ({ username }) => {
	return (
		<div>
			<h2>Welcome {username} this is your dashboard</h2>

			<i>Dashboard cof cof</i>
			<Link href='/'>
				<Button style={{ marginTop: '1rem' }}>Log out</Button>
			</Link>
		</div>
	);
};

Dashboard.getInitialProps = async context => {
	/* 	console.info('##### Congratulations! You are authorized! ######', context); */
	const user = context.query;
	return user;
};

export default withPrivateRoute(Dashboard);
