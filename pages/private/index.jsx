import React from 'react';
import withPrivateRoute from '../../components/withPrivateRoute';

const Private = () => {
	return <div>This is a Private page which is private.</div>;
};

Private.getInitialProps = async props => {
	console.info('##### Congratulations! You are authorized! ######', props);
	return {};
};

console.log(Private);

export default withPrivateRoute(Private);
