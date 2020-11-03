import { useEffect, useState } from "react";
import "./Loader.scss";

export default function Loader({ onLoaded }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
			document.body.style.overflowY = "scroll";
			onLoaded();
		}, 3000);
	}, [onLoaded]);

	return (
		<section className={`loader ${loaded ? "loader--loaded" : ""}`}>
			<div className="loading">
				<div></div>
				<div></div>
				<div></div>
			</div>
		</section>
	);
}
