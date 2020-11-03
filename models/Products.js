const { Schema, model, Types } = require("mongoose");

const ProductsSchema = new Schema({
	title: String,
	cost: Number,
	image: String,
	idCurrency: Types.ObjectId,
	salled: Number,
	date: String,
});

module.exports = model("Products", ProductsSchema);
