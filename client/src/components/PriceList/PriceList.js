import "./PriceList.scss";

import { ReactComponent as CloseIcon } from "../../icons/close-circle.svg";
import { useContext, useEffect, useState } from "react";
import { context } from "../../context";
import {
	CHANGE_BASKET_COUNT_PRODUCTS,
	REMOVE_PRODUCT_FROM_BASKET,
} from "../../types";

export default function PriceList({
	id,
	title,
	image,
	count,
	currency,
	cost,
	symbol,
	top,
	bottom,
	index,
}) {
	const { dispatchBasket } = useContext(context);
	const [price, setPrice] = useState(0);

	useEffect(() => {
		setPrice(cost * count);
	}, [count, cost]);

	function productCountHandler(val) {
		dispatchBasket({
			type: CHANGE_BASKET_COUNT_PRODUCTS,
			payload: {
				id,
				count: val,
			},
		});
	}

	function removeProductHandler() {
		dispatchBasket({ type: REMOVE_PRODUCT_FROM_BASKET, payload: { id } });
	}

	return (
		<div
			data-aos="fade-up"
			data-aos-delay={index * 1 + 500}
			key={id}
			className="price-list"
			style={{ margin: `${top || 0} 0 ${bottom || 0} 0` }}
		>
			<CloseIcon
				className="price-list__remove"
				onClick={removeProductHandler}
			/>
			<img
				className="price-list__cover"
				src={`${process.env.PUBLIC_URL}/img/products/${image}`}
				alt={title}
			/>
			<h2 className="price-list__title">{title}</h2>
			<input
				onChange={(event) => productCountHandler(event.target.value)}
				className="price-list__input"
				type="number"
				min={1}
				value={count}
			/>
			<b className="price-list__cost">
				{currency} {symbol}
				{price}
			</b>
		</div>
	);
}
