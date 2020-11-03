import "./Hero.scss";

export default function Hero({ top, bottom }) {
	return (
		<section
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
			className="hero"
		>
			<div className="hero__info">
				<div className="hero__header">
					<h2 className="hero__head" data-aos="fade-up">
						Useful tools to stimulate planning, productivity and creativity.
					</h2>
				</div>
				<div
					data-aos-offset="-300"
					data-aos="fade-down"
					data-aos-delay="600"
					className="hero__footer"
				>
					<p>Complimentary ground shipping on U.S. orders $30+</p>
				</div>
			</div>
			<div className="hero__cover">
				<img
					data-aos="fade-down"
					data-aos-delay={500}
					className="hero__img"
					src={`${process.env.PUBLIC_URL}/img/hero/hero.jpg`}
					alt="Hero"
				/>
			</div>
		</section>
	);
}
