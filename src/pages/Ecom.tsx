import React from 'react'
import Product from 'src/components/Product/Product'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

const Ecom = () => {
  const { loginWeb3Auth, isAuthenticated } = useAccountAbstraction()

  if (!isAuthenticated) {
    return (
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <button
          onClick={loginWeb3Auth}
          className="flex text-white h-14 w-28 items-center justify-center rounded-lg bg-[#005792] font-medium"
        >
          Launch App
        </button>
      </div>
    )
  }

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
