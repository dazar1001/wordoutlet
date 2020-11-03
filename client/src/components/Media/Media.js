import "./Media.scss";
import { useEffect, useState } from "react";
import useHttp from "../../hooks/http.hook";

import { ReactComponent as TwitterLogo } from "../../icons/logo-twitter.svg";
import { ReactComponent as FacebookLogo } from "../../icons/logo-facebook.svg";
import { ReactComponent as PinterestLogo } from "../../icons/logo-pinterest.svg";
import { ReactComponent as InstagramLogo } from "../../icons/logo-instagram.svg";

function getIcon(name) {
	switch (name) {
		case "twitter":
			return <TwitterLogo />;
		case "facebook":
			return <FacebookLogo />;
		case "instagram":
			return <InstagramLogo />;
		case "pinterest":
			return <PinterestLogo />;
		default:
			return name;
	}
}

export default function Media() {
	const { request } = useHttp();
	const [media, setMedia] = useState([]);

	useEffect(() => {
		(async function () {
			setMedia(await request("/api/media"));
		})();
	}, [request]);

	return (
		<ul className="media">
			{media.map(({ name, link, _id }) => (
				<li key={_id} className="media__list">
					<a
						href={link}
						rel="noreferrer"
						className="media__link"
						target="_blank"
					>
						{getIcon(name)}
					</a>
				</li>
			))}
		</ul>
	);
}
