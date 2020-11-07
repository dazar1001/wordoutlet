import { useRef, useEffect } from "react";

export default function Checkout({ price, currency, description }) {
	let paypal = useRef();

	useEffect(() => {
		window.paypal
			.Buttons({
				createOrder: (data, actions, err) => {
					return actions.order.create({
						intent: "CAPTURE",
						purchase_units: [
							{
								description: description,
								amount: {
									currency_code: currency,
									value: price,
								},
							},
						],
					});
				},
				onApprove: async (data, actions) => {
					const order = await actions.order.capture();
					console.log("Success order: " + order);
				},
				onError: (err) => {
					console.log(err);
				},
			})
			.render(paypal.current);
	}, [currency, description, price]);

	return (
		<div>
			<div ref={paypal}></div>
		</div>
	);
}
