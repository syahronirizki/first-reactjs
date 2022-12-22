import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
	const params = useParams();
	const [article, setArticle] = useState({});
	const [loading, setLoading] = useState(true);
	const [noContent, setNoContent] = useState(false);

	useEffect(
		function () {
			async function getArticles() {
				const request = await fetch(
					`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`
				);

				if (!request.ok) {
					return setNoContent(true);
				}

				const response = await request.json();

				document.title = response.title;
				setArticle(response);
				setLoading(false);
			}

			getArticles();
		},
		[params]
	);

	if (noContent) {
		return <h1>Wrong iD :D</h1>;
	}

	return (
		<section>
			{loading ? (
				<i>Please Wait ...</i>
			) : (
				<div>
					<article className='text-center'>
						<h5 className='card-title'>{article.title}</h5>
						<p className='card-text'>
							<small className='text-muted'>
								<time>{new Date(article.publishedAt).toLocaleDateString()}</time>
							</small>
						</p>
						<img
							src={article.imageUrl}
							className='card-img-top photo border'
							alt={article.title}
						/>
						<p className='card-text'>{article.summary}</p>
						<p className='card-text'>
							Source:{" "}
							<a
								href={article.url}
								target='_blank'
								className='text-muted title'
								rel='noreferrer'>
								{article.newsSite}
							</a>
						</p>
					</article>
				</div>
			)}
		</section>
	);
}
