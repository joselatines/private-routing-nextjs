import Link from 'next/link';
import { Ball } from '../components/ball/styles';
import Button from '../components/button/styles';
import { Buttons, Container, InnerContainer } from './styles';

export default function Home() {
	return (
		<Container>
			<Ball b2={true} style={{ right: 50, top: 20 }}></Ball>

			<Ball b3={true} size='7rem' style={{ left: 50, bottom: 60 }}></Ball>

			<InnerContainer>
				<h2>Home Page</h2>
				<i>Private routing</i>
				<img
					src='https://images.prismic.io/boringowl/fe6cc033-921c-42e6-8d10-582373846263_next+js+framework.jpeg?auto=compress,format'
					alt='Picture of the author'
				/>
				<Buttons>
					<Link href='/login'>
						<Button>Log In</Button>
					</Link>
					<Link href='/users'>
						<Button outline={true}>Users</Button>
					</Link>
				</Buttons>
			</InnerContainer>
		</Container>
	);
}
