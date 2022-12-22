import { useEffect } from "react";

export default function Contact() {
	useEffect(function () {
		document.title = "Contact";
	});
	return (
		<>
			<section>
				<div className='px-4 pt-5 my-5 text-center border-bottom'>
					<h1 className='display-4 fw-bold'>Contact Page</h1>
					<div className='text-center'>
						<p className='lead mb-4'>
							<b>
								Keep smiling, because life is a beautiful thing and there's so much
								to smile about.
							</b>{" "}
							-Marilyn Monroe
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
