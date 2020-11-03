import Media from "../Media/Media";
import "./Footer.scss";

export default function Footer({ top, bottom }) {
	return (
		<footer
			className="footer"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			<div className="footer__container">
				<div className="footer__address">
					Wordoutlet, 3581 Lunetta Street, Sieta Key, Florida. 20002, USA
				</div>
				<div className="footer__links">
					<ul>
						<li>FAQs</li>
						<li>Return policy</li>
						<li>Shipping</li>
					</ul>
				</div>
				<div className="footer__links">
					<ul>
						<li>Careers</li>
						<li>Community</li>
						<li>Wholesale</li>
					</ul>
				</div>
				<div className="footer__media">
					<Media />
				</div>
			</div>
		</footer>
	);
}
