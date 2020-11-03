import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ProductPage from "./pages/ProductPage";
import BasketPage from "./pages/BasketPage";

export default function useRoutes() {
	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/collection" exact>
				<CollectionPage />
			</Route>
			<Route path="/contact" exact>
				<ContactPage />
			</Route>
			<Route path="/about" exact>
				<AboutPage />
			</Route>
			<Route path="/product/:id" exact>
				<ProductPage />
			</Route>
			<Route path="/basket" exact>
				<BasketPage />
			</Route>
		</Switch>
	);
}
