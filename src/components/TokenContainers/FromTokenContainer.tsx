import React, { useState } from 'react'

const FromTokenContainer = () => {
  const [amount, setAmount] = useState<number>(0)

  return (
    <div className="my-2 h-32 w-full rounded-lg bg-[#f0f5f9] flex flex-col p-3 gap-y-5">
      <div className="flex items-center  gap-x-3">
        <p className="text-sm text-gray-400">From</p>
        <p className="text-lg text-gray-700">Ethereum</p>

        <div className="flex ml-auto">
          <p className="text-sm text-gray-400 font-light">Balance : 100</p>
          <p onClick={() => setAmount(100)} className="text-[#64c2ff] text-sm ml-5 cursor-pointer">
            Max
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-3">
        <select className="bg-transparent focus:outline-none focus:ring-0 text-2xl">
          <option>ETH</option>
          <option>BTC</option>
          <option>MATIC</option>
        </select>

        <input
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          value={amount}
          type="number"
          placeholder="0"
          className="bg-transparent focus:outline-none focus:ring-0 text-2xl w-36"
        />
      </div>
    </div>
  )
}

export default FromTokenContainer
