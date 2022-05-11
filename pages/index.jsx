import Image from 'next/image';
import Link from 'next/link';

import nextImg from '../public/next.webp';

export default function Home() {
	return (
		<section className='container'>
			<div className='innerContainer'>
				<h2>Home Page</h2>
				<i>Private routing</i>
				<Image
					src={nextImg}
					alt='Picture of the author'
					width={100}
					height={100}
					priority
				/>
				<div className='buttons'>
					<Link href='/login'>
						<button>Log In</button>
					</Link>
					<Link href='/users'>
						<button className='outline'>Users</button>
					</Link>
				</div>
			</div>

			<style jsx>{`
				.container {
					min-height: 100vh;
					display: grid;
					place-items: center;
				}
				.innerContainer {
					display: grid;
					place-items: center;
				}
				img {
					min-width: 4vw;
					max-width: 10vw;
				}

				.buttons {
					margin-top: 1rem;
					display: flex;
					justify-content: center;
					gap: 1rem;
				}
			`}</style>
		</section>
	);
}
