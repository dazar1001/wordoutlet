const Products = require("../models/Products");
const { Router } = require("express");
const { Types } = require("mongoose");
const router = Router();

router.get("/", async (req, res) => {
	try {
		const products = await Products.aggregate([
			{
				$lookup: {
					from: "currency",
					localField: "idCurrency",
					foreignField: "_id",
					as: "currency",
				},
			},
		]);
		res.status(200).json(products);
	} catch (err) {
		console.log(`❌ Products error: ${err.message}`);
	}
});

router.get("/sort/sales", async (req, res) => {
	try {
		const products = await Products.aggregate([
			{
				$lookup: {
					from: "currency",
					localField: "idCurrency",
					foreignField: "_id",
					as: "currency",
				},
			},
		]).sort({ salled: 1 });
		res.status(200).json(products);
	} catch (err) {
		console.log(`❌ Product error on sort: ${err.message}`);
	}
});

router.get("/sort/date", async (req, res) => {
	try {
		const products = await Products.aggregate([
			{
				$lookup: {
					from: "currency",
					localField: "idCurrency",
					foreignField: "_id",
					as: "currency",
				},
			},
		]).sort({ date: 1 });
		res.status(200).json(products);
	} catch (err) {
		console.log(`❌ Product error on sort: ${err.message}`);
	}
});

router.get("/find/:id", async (req, res) => {
	try {
		const product = await Products.aggregate([
			{ $match: { _id: Types.ObjectId(req.params.id) } },
			{
				$lookup: {
					from: "currency",
					localField: "idCurrency",
					foreignField: "_id",
					as: "currency",
				},
			},
		]);
		res.status(200).json(product);
	} catch (err) {
		console.log(`❌ Product error on find one: ${err.message}`);
	}
});

module.exports = router;
