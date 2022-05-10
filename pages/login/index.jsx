import Link from 'next/link';
import { useState } from 'react';
import { Ball } from '../../components/ball/styles';
import Button from '../../components/button/styles';
import { Container, Form, Input, Inputs, Error } from './styles';

export default function Login({ error }) {
	const [userData, setUserData] = useState({});

	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [key]: value });
	};

	return (
		<Container>
			<Ball b2={true} style={{ left: 350, bottom: 80 }}></Ball>

			<Ball b3={true} size='8rem' style={{ right: 350, top: 80 }}></Ball>
			<div>
				<Form>
					<h1>Login Here</h1>
					<Inputs>
						<Input
							onChange={e => handleChange(e)}
							type='text'
							name='username'
							placeholder='Username'
							required
						/>
						<Input
							onChange={e => handleChange(e)}
							type='text'
							name='password'
							placeholder='Password'
							required
						/>
					</Inputs>
					{error !== '' && <Error>{error}</Error>}

					<Link
						href={{
							pathname: '/dashboard',
							query: userData,
						}}
						as='/dashboard'
					>
						<Button outline={true} onClick={() => setUserData({})}>
							Login
						</Button>
					</Link>
				</Form>
				<Link href='/'>
					<Button size='.7em'>Go Home</Button>
				</Link>
			</div>
		</Container>
	);
}

Login.getInitialProps = async ctx => {
	const loginFailed = (await ctx.asPath) === '/login?redirected=true';
	if (loginFailed) {
		return { error: 'User or password incorrect' };
	} else {
		return { error: '' };
	}
};
