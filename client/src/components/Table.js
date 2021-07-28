import React from 'react'
import Pop from './Pop'

const Table = ({ products, setProducts }) => {

    return (

        <div className="container">
            <div className="mt-4">
                <h1 className="fw-bold">Products</h1>
            </div>
            <hr />
            <button className="m-1 px-4 btn btn-secondary fw-bold" data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add</button>

            <table className="table my-4">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Price Per Qty</th>
                        <th scope="col">VAT</th>
                        <th scope="col">Price Per Qty</th>
                        <th scope="col">Total Stock</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod, index) => {
                        return (
                            <tr key={index}>
                                <td>{prod.productName}</td>
                                <td>{prod.pricePerQtyGross}</td>
                                <td>{prod.vat}</td>
                                <td>{prod.pricePerQtyNet}</td>
                                <td>{prod.totalStock}</td>
                                <td> <a href={`/uploads/${prod.productImage}`} > <u>{((prod.productImage) ? `img` : '')}</u> </a></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <Pop setProducts={setProducts} products={products} />
        </div>
    )
}

export default Table
