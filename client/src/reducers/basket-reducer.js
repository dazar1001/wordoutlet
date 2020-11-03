import {
	ADD_PRODUCT_TO_BASKET,
	CHANGE_BASKET_COUNT_PRODUCTS,
	REMOVE_PRODUCT_FROM_BASKET,
} from "../types";

export default function basket(state, { type, payload }) {
	console.log(state);
	switch (type) {
		case ADD_PRODUCT_TO_BASKET:
			return [...state, payload];
		case REMOVE_PRODUCT_FROM_BASKET:
			return state.filter((product) => product.id !== payload.id);
		case CHANGE_BASKET_COUNT_PRODUCTS:
			let items = [...state];
			items.map((product) =>
				product.id === payload.id ? (product.count = payload.count) : product
			);
			console.log(items);
			return items;
		default:
			return state;
	}
}
