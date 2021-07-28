const express = require('express')
const router = express.Router()
const multer = require('multer')
const mongoose = require('mongoose')
const Product = require('../models/Product')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./client/public/uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({ storage: storage })

// API Routes
router.get('/products', async (req, res) => {
    await Product.find().then((prod) => {
        res.json(prod)
    })
})

router.post('/addProduct', upload.single("productImage"), async (req, res) => {

    const newProduct = new Product({
        productName: req.body.productName,
        pricePerQtyGross: req.body.pricePerQtyGross,
        vat: req.body.vat,
        pricePerQtyNet: req.body.pricePerQtyNet,
        totalStock: req.body.totalStock,
        productImage: req.file.originalname,
        createdAt: new Date()
    })

    try {
        await newProduct.save()
            .then(() => console.log('Product Added'))
    } catch (err) {
        console.log(err)
    }
})

module.exports = router