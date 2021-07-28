import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Table from './components/Table'

function App() {
  const [products, setProducts] = useState([
    {
      productName: '',
      pricePerQtyGross: '',
      vat: '',
      pricePerQtyNet: '',
      totalStock: ''
    }
  ])

  useEffect(() => {
    fetch('/products').then(res => {
      if (res.ok) {
        return res.json()
      }
    }).then(jsonRes => {
      setProducts(jsonRes)
    })
  })

  return (
    <div className="App">
      <Navbar />
      <Table products={products} setProducts={setProducts} />
    </div>
  );
}

export default App;
