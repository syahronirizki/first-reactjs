import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog() {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(function () {
		document.title = "Blog";
		async function getArticles() {
			const request = await fetch("https://api.spaceflightnewsapi.net/v3/articles");

			const response = await request.json();

			setArticles(response);
			setLoading(false);
		}

		getArticles();
	}, []);

	return (
		<section>
			<div className='container px-4 py-5' id='icon-grid'>
				<h1 className='pb-2 border-bottom text-center'>Blog Page</h1>
				<p>Blog List:</p>
				{loading && <i>Please Wait ...</i>}
				{!loading && (
					<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 py-5'>
						{articles.map(function (article) {
							return (
								<div className='col d-flex align-items-start' key={article.id}>
									<div>
										<h3 className='fw-bold mb-0 fs-4 title'>
											<Link to={`/blog/${article.id}`}>{article.title}</Link>
										</h3>
										<p>
											<time>
												{new Date(article.publishedAt).toLocaleDateString()}
											</time>
										</p>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</section>
	);
}
