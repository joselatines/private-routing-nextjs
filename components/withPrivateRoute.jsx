import Router from 'next/router';
import users from '../users.json';

const login = '/login?redirected=true'; // Define your login route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */

// Receives an obj
const checkUserAuthentication = async user => {
	const usersArray = await users;
	const isChecked = usersArray.find(
		el => (el.username === user.username) & (el.password === user.password)
	);

	if (isChecked) {
		return { auth: true };
	}

	return { auth: false }; // change null to { isAdmin: true } for test it.
};

export default WrappedComponent => {
	const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

	hocComponent.getInitialProps = async context => {
		const userToVerified = context.query;
		const userAuth = await checkUserAuthentication(userToVerified);

		// Are you an authorized user or not?
		if (!userAuth?.auth) {
			// Handle server-side and client-side rendering.
			if (context.res) {
				context.res?.writeHead(302, {
					Location: login,
				});
				context.res?.end();
			} else {
				Router.replace(login);
			}
		} else if (WrappedComponent.getInitialProps) {
			const wrappedProps = await WrappedComponent.getInitialProps({
				...context,
				auth: userAuth,
			});
			return { ...wrappedProps, userAuth };
		}

		return { userAuth };
	};

	return hocComponent;
};
