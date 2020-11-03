import { TOGGLE_MENU } from "../types";

export default function menuReducer(state, { type }) {
	switch (type) {
		case TOGGLE_MENU:
			return !state;
		default:
			return state;
	}
}
