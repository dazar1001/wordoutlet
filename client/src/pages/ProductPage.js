import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useHttp from "../hooks/http.hook";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Previe from "../components/Previe/Previe";
import Products from "../components/Products/Products";

export default function ProductPage() {
	const params = useParams();
	const [product, setProduct] = useState(null);
	const [fresh, setFresh] = useState([]);
	const { request } = useHttp();
	useEffect(() => {
		window.scrollTo(0, 0);
		(async function () {
			setProduct((await request(`/api/products/find/${params.id}`))[0]);
			setFresh(await request("/api/products/sort/date"));
		})();
	}, [request, params.id]);

	if (!product) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Helmet>
				<title>WORDOUTLET // {product.title}</title>
			</Helmet>
			<Header />
			<Nav />
			<main>
				<Previe
					id={product._id}
					title={product.title}
					image={product.image}
					currency={product.currency[0].name}
					symbol={product.currency[0].symbol}
					cost={product.cost.$numberDecimal}
					top="80px"
				/>
				<Products
					bottom="120px"
					top="120px"
					products={fresh}
					head="You may also like"
				/>
			</main>
			<Footer />
		</>
	);
}
