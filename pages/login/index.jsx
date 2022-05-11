import Link from 'next/link';
import { useState } from 'react';

export default function Login({ error }) {
	const [userData, setUserData] = useState({});

	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setUserData({ ...userData, [key]: value });
	};

	return (
		<div className='container'>
			<div>
				<form className='form'>
					<h1>Login Here</h1>
					<div className='inputs'>
						<input
							onChange={e => handleChange(e)}
							type='text'
							name='username'
							placeholder='Username'
							required
						/>
						<input
							onChange={e => handleChange(e)}
							type='text'
							name='password'
							placeholder='Password'
							required
						/>
					</div>
					{error !== '' && <span className='error'>{error}</span>}

					<Link
						href={{
							pathname: '/dashboard',
							query: userData,
						}}
						as='/dashboard'
					>
						<button onClick={() => setUserData({})}>Login</button>
					</Link>
				</form>
				<Link href='/'>
					<button size='.7em'>Go Home</button>
				</Link>
			</div>

			<style jsx>{`
				.container {
					min-height: 100vh;
					display: grid;
					place-items: center;
				}
				input {
					outline: none;
					min-width: 10rem;

					border-radius: 5px;
					padding: 1rem;
					opacity: 0.5;
				}
				form {
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
				}
				form button {
					width: -webkit-fill-available;
				}
				.inputs {
					display: grid;
					gap: 1rem;
					margin: 2rem 0 2.5rem;
				}
				.error {
					color: red;
					font-weight: bolder;
				}
			`}</style>
		</div>
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
