import Helmet from "react-helmet";

import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import Head from "../components/Head/Head";
import Form from "../components/Form/Form";
import { useEffect } from "react";

export default function ContactPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<Helmet>
				<title>WORDOUTLET // Contact</title>
			</Helmet>
			<Header />
			<Nav />
			<main>
				<Head>Contact Us</Head>
				<Form top="120px" bottom="120px" />
			</main>
			<Footer />
		</>
	);
}
