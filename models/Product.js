const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    productName: String,
    pricePerQtyGross: String,
    vat: String,
    pricePerQtyNet: String,
    totalStock: String,
    productImage: String
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product