import React, { useState } from 'react'
import axios from 'axios'

const Pop = ({ products, setProducts }) => {
    const [productName, setProductName] = useState('')
    const [filename, setFileName] = useState('')
    const [priceGross, setPriceGross] = useState(0)
    const [priceNet, setPriceNet] = useState('')
    const [vat, setVat] = useState(0)
    const [totalStock, setTotalStock] = useState(0)

    const showPriceGross = (e) => {
        setPriceGross(e.target.value)
    }

    const showVat = async (e) => {
        setVat(e.target.value)
        const dec = parseInt(vat) / 100
        const mul = parseInt(priceGross) * dec

        setPriceNet(parseInt(priceGross) - mul)

        console.log(priceNet)
    }

    const addImage = (e) => {
        setFileName(e.target.files[0])
    }

    const addProduct = (e) => {
        e.preventDefault()

        const formData = new FormData()

        formData.append('productName', productName)
        formData.append('pricePerQtyGross', priceGross)
        formData.append('vat', vat)
        formData.append('pricePerQtyNet', priceNet)
        formData.append('totalStock', totalStock)
        formData.append('productImage', filename)

        // const newProduct = {
        //     productName: productName,
        //     pricePerQtyGross: priceGross,
        //     vat: vat,
        //     pricePerQtyNet: priceNet,
        //     totalStock: totalStock,
        //     url: filename
        // }

        axios.post('/addProduct', formData)
        alert('Product Added')
    }

    return (
        <div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content w-auto">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={addProduct} encType="multipart/form-data">
                            <div className="modal-body">
                                <div className="my-2">
                                    <label>Product Name</label>
                                    <input onChange={(e) => setProductName(e.target.value)} type="text" className="form-control" name="productName" />
                                </div>
                                <div className="my-2">
                                    <label>Price Per Qty (Gross)</label>
                                    <input onChange={showPriceGross} type="number" className="form-control" name="pricePerQtyGross" />
                                </div>
                                <div className="my-2">
                                    <label>VAT</label>
                                    <select onChange={showVat} className="form-select" aria-label="Default select example" name="vat">
                                        <option></option>
                                        <option value="10">10%</option>
                                        <option value="15">15%</option>
                                        <option value="25">25%</option>
                                    </select>
                                </div>
                                <div className="my-2">
                                    <label>Price Per Qty (net)</label>
                                    <input defaultValue={priceNet} type="text" className="form-control" name="pricePerQtyNet" />
                                </div>
                                <div className="my-2">
                                    <label>Total Stock</label>
                                    <input onChange={(e) => setTotalStock(e.target.value)} type="number" className="form-control" name="totalStock" />
                                </div>
                                <div className="my-2">
                                    <label>Image</label>
                                    <input onChange={addImage} filename="productImage" type="file" className="form-control" accept='image/png, image/jpg' />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Pop
