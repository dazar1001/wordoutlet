import "./Check.scss";

import PriceList from "../PriceList/PriceList";
import Button from "../Button/Button";
import { useState, useEffect, useContext } from "react";
import { context } from "../../context";
import Checkout from "../Checkout/Checkout";

export default function Check({ products, top, bottom }) {
	const { stateBasket } = useContext(context);
	const [totalPrice, setTotalPrice] = useState(0);
	const [desc, setDesc] = useState("");
	const [checkout, setCheckout] = useState(false);
	var total = 0;

	useEffect(() => {
		function countTotalPrice() {
			products.map((prod) => {
				total += prod.cost * prod.count;
				return prod;
			});
			setTotalPrice(total);
		}
		countTotalPrice();
	}, [stateBasket]);

	function checkoutHandler() {
		let desc = "";
		desc = stateBasket.map((prod) => `${prod.title}, ${prod.count}pie`);
		setDesc(desc.join(","));
		products.map((prod) => {
			total += prod.cost * prod.count;
			return prod;
		});
		setTotalPrice(total);
		setCheckout(true);
	}

	return (
		<section
			className="check"
			style={{ margin: `${top || 0} auto ${bottom || 0} auto` }}
		>
			<div className="check__header">
				<h2 className="check__total">Total</h2>
				<b className="check__price">
					{products.length > 0 &&
						products[0].currency + " " + products[0].symbol}
					{products.length ? totalPrice : ""}
				</b>
			</div>
			<div className="check__body">
				{!products.length && "Basket is empty now"}
				{products.map((product, i) => (
					<PriceList
						key={product.id}
						id={product.id}
						image={product.image}
						title={product.title}
						cost={product.cost}
						symbol={product.symbol}
						count={product.count}
						currency={product.currency}
					/>
				))}
				{checkout && products.length > 0 ? (
					<Checkout
						description={desc}
						price={totalPrice}
						currency={products[0].currency || "USD"}
					/>
				) : (
					<div className="check__footer">
						{products.length > 0 && (
							<Button onClick={checkoutHandler}>Buy now</Button>
						)}
					</div>
				)}
			</div>
		</section>
	);
}
