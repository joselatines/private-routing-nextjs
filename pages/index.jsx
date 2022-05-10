import Image from 'next/image';
import Link from 'next/link';
import { Ball } from '../components/ball/styles';
import Button from '../components/button/styles';
import { Buttons, Container, InnerContainer } from './styles';

import nextImg from '../public/next.webp';

export default function Home() {
	return (
		<Container>
			<Ball b2={true} style={{ right: 50, top: 20 }}></Ball>

			<Ball b3={true} size='7rem' style={{ left: 50, bottom: 60 }}></Ball>

			<InnerContainer>
				<h2>Home Page</h2>
				<i>Private routing</i>
				<Image
					src={nextImg}
					alt='Picture of the author'
					width={100}
					height={100}
					priority
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
