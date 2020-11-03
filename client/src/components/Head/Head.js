import "./Head.scss";

export default function Head({ children, bottom }) {
	return (
		<section className="head" style={{ margin: `0 0 ${bottom || 0} 0` }}>
			<h2 data-aos="fade-up" className="head__text">
				{children}
			</h2>
		</section>
	);
}
