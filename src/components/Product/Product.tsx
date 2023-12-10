import React from 'react'
import Laptop from 'src/assets/laptop.jpg'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

const Product = () => {
  const { relayTransaction, isRelayerLoading, safeSelected } = useAccountAbstraction()
  return (
    <div className="h-96 w-72 border rounded-lg border-[#005792] flex flex-col">
      <img src={Laptop} alt="Laptop" width={'300px'} height={'20px'} />
      <h1 className="text-xl font-bold my-3 ml-2">Macbook Pro MATIC 0.05</h1>

      <button
        onClick={async () => {
          await relayTransaction(safeSelected ? safeSelected : '', 0.05)
        }}
        className="flex h-11 mx-auto text-white w-[95%] items-center mt-2  justify-center rounded-lg bg-[#005792] font-medium"
      >
        {isRelayerLoading ? 'Please Wait...' : 'Buy now'}
      </button>
    </div>
  )
}

export default Product
