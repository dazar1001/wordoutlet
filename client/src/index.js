import "./index.scss";
import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { context } from "./context";

import menuReducer from "./reducers/menu-reducer";
import basketReducer from "./reducers/basket-reducer";

function Main() {
	const [stateMenu, dispatchMenu] = useReducer(menuReducer, false);
	const [stateBasket, dispatchBasket] = useReducer(basketReducer, []);

	return (
		<context.Provider
			value={{ stateMenu, dispatchMenu, stateBasket, dispatchBasket }}
		>
			<App />
		</context.Provider>
	);
}

ReactDOM.render(<Main />, document.getElementById("root"));
