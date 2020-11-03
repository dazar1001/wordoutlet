import "./Info.scss";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowIcon } from "../../icons/arrow-forward-outline.svg";

export default function Info({ head, link, value, top, bottom }) {
	return (
		<div className="info" style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}>
			<h2 className="info__head" data-aos="fade-up">
				{head}
			</h2>
			{link && (
				<Link data-aos="fade-up" className="info__link" to={link}>
					{value} <ArrowIcon />
				</Link>
			)}
		</div>
	);
}
