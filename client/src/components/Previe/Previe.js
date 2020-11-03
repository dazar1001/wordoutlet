import "./Previe.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { context } from "../../context";

import Button from "../Button/Button";
import { ADD_PRODUCT_TO_BASKET } from "../../types";

export default function Previe({
	id,
	title,
	currency,
	symbol,
	cost,
	image,
	top,
	bottom,
}) {
	const [count, setCount] = useState(1);
	const { stateBasket, dispatchBasket } = useContext(context);

	function busketHandler() {
		dispatchBasket({
			type: ADD_PRODUCT_TO_BASKET,
			payload: {
				id,
				title,
				currency,
				symbol,
				cost,
				image,
				count,
			},
		});
	}

	return (
		<section
			className="previe"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			<div className="previe__cover">
				<img
					src={`${process.env.PUBLIC_URL}/img/products/${image}`}
					alt={title}
				/>
			</div>
			<div className="previe__info">
				<div className="previe__container">
					<h2 className="previe__title">{title}</h2>
					<b className="previe__price">
						{currency} {symbol}
						{cost}
					</b>
					{stateBasket.find((prod) => prod.id === id) ? (
						<div className="previe__basket">
							The product has been added to the cart, Go to the{" "}
							<Link to="/basket">basket?</Link>
						</div>
					) : (
						<div>
							<input
								onChange={(event) => setCount(event.target.value)}
								className="previe__input"
								value={count}
								type="number"
								min={1}
							/>
							<Button onClick={busketHandler}>ADD TO BAG</Button>
						</div>
					)}
				</div>
			</div>
		</section>
	);
}
