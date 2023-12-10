import React from 'react'
import Product from 'src/components/Product/Product'

const Ecom = () => {
  return (
    <div className="p-6 flex flex-col">
      <h1 className="text-3xl font-bold mb-6">Demo DApp for Adrasteia</h1>
      <div className="flex gap-4">
        <Product />
      </div>
    </div>
  )
}

export default Ecom
