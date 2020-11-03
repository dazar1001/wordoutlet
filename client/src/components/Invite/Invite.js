import { Link } from "react-router-dom";
import "./Invite.scss";

import { ReactComponent as ArrowIcon } from "../../icons/arrow-forward-outline.svg";

export default function Invite({ top, bottom, head, cover }) {
	return (
		<section
			className="invite"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			<div className="invite__cover">
				<img src={`${process.env.PUBLIC_URL}/${cover}`} alt={head} />
			</div>
			<div className="invite__info">
				<h2 className="invite__head" data-aos="fade-up">
					{head}
				</h2>
				<Link className="invite__link" data-aos="fade-up" to="/collection">
					SHOP NOW <ArrowIcon />
				</Link>
			</div>
		</section>
	);
}
