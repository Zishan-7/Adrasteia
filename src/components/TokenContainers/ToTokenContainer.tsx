import React from 'react'

const ToTokenContainer = () => {
  return (
    <div className="my-2 h-32 w-full rounded-lg bg-[#f0f5f9] flex flex-col p-3 gap-y-5">
      <div className="flex items-center  gap-x-3">
        <p className="text-sm text-gray-400">To</p>
        <p className="text-lg text-gray-700">MATIC</p>

        <div className="flex ml-auto">
          <p className="text-sm text-gray-400 font-light">Balance : 0.002</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-3">
        <select className="bg-transparent focus:outline-none focus:ring-0 text-2xl">
          <option>MATIC</option>
          <option>ETH</option>
          <option>BTC</option>
        </select>

        <input
          //   onChange={(e) => setAmount(parseFloat(e.target.value))}
          //   value={amount}
          disabled
          type="number"
          placeholder="0"
          className="bg-transparent focus:outline-none focus:ring-0 text-2xl w-36"
        />
      </div>
    </div>
  )
}

export default ToTokenContainer
