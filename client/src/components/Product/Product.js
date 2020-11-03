import { Link } from "react-router-dom";
import "./Product.scss";

export default function Product({
	id,
	title,
	image,
	cost,
	currency,
	symbol,
	index,
}) {
	return (
		<Link
			to={`/product/${id}`}
			data-aos="fade-up"
			data-aos-delay={(index + 2) * 100}
			className="product"
		>
			<b className="product__price">
				{currency} {symbol}
				{cost}
			</b>
			<img
				src={`${process.env.PUBLIC_URL}/img/products/${image}`}
				alt={title}
			/>
			<h2 className="product__head">{title}</h2>
		</Link>
	);
}
