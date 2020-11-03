import { BrowserRouter as Router } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader/Loader";

import useRoutes from "./routes";

export default function App() {
	function onLoaded() {
		Aos.init({ duration: 1400, delay: 400 });
	}

	const routes = useRoutes();
	return (
		<div className="app">
			<Loader onLoaded={onLoaded} />
			<Router>{routes}</Router>
		</div>
	);
}
