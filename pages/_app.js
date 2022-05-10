import { Watermark } from '../components/watermark';
import { GlobalStyles } from '../styles/globalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Watermark />
			<GlobalStyles />
		</>
	);
}

export default MyApp;
