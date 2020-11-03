import Product from "../Product/Product";
import "./Products.scss";

export default function Products({ head, products, top, bottom }) {
	return (
		<section
			className="products"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			{head && <h2 className="products__head">{head}</h2>}
			<div className="products__container">
				{products.map(({ _id, title, cost, image, currency }, index) => (
					<Product
						key={_id}
						id={_id}
						title={title}
						cost={cost.$numberDecimal}
						image={image}
						currency={currency[0].name}
						symbol={currency[0].symbol}
						index={index}
					/>
				))}
			</div>
		</section>
	);
}
