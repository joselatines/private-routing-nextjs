import { Watermark } from '../components/watermark';
import '../styles/globals.css';
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<Watermark />
		</>
	);
}

export default MyApp;
