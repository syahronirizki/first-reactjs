import { useEffect } from "react";

export default function Home() {
	useEffect(function () {
		document.title = "Home";
	});
	return (
		<>
			<section>
				<div className='px-4 pt-5 my-5 text-center border-bottom'>
					<h1 className='display-4 fw-bold'>Welcome Page</h1>
					<div className='about text-justify'>
						<p className='lead mb-4'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas,
							reprehenderit minus corrupti soluta labore autem, dolorem accusamus
							perspiciatis quidem sed laboriosam sit, blanditiis vero. Voluptatibus
							doloribus temporibus expedita eum labore illo quasi eveniet deserunt!
							Veritatis maxime ratione non est neque, id aliquid. Praesentium voluptas
							quasi nihil omnis, deleniti consectetur dolore, quod hic minima adipisci
							ullam veniam rerum consequuntur nulla pariatur voluptate cum similique
							quae culpa id odio fugiat. Saepe assumenda, placeat dolor facere esse
							impedit nemo eligendi fugit beatae vero, nisi optio tempora molestias
							ratione corporis debitis. Minus facere sapiente dolor adipisci qui amet
							laudantium nemo dolorem sequi, exercitationem placeat.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
