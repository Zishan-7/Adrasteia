import React, { useState } from 'react'

interface FromTokenContainerProps {
  swapData: any
  setSwapData: any
}

const FromTokenContainer = ({ setSwapData, swapData }: FromTokenContainerProps) => {
  const [amount, setAmount] = useState<number>(0)

  const tokens = [
    {
      address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
      symbol: 'MATIC',
      decimals: 18,
      name: 'MATIC',
      logoURI: 'https://tokens.1inch.io/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png'
    },
    {
      address: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
      symbol: 'BETH',
      decimals: 18,
      name: 'Binance Beacon ETH',
      logoURI: 'https://tokens.1inch.io/0x250632378e573c6be1ac2f97fcdf00515d0aa91b.png'
    }
  ]

  return (
    <div className="my-2 h-32 w-full rounded-lg bg-[#f0f5f9] flex flex-col p-3 gap-y-5">
      <div className="flex items-center  gap-x-3">
        <p className="text-sm text-gray-400">From</p>
        {/* <p className="text-lg text-gray-700">{swapData.from}</p> */}

        {/* <div className="flex ml-auto">
          <p className="text-sm text-gray-400 font-light">Balance : 100</p>
          <p onClick={() => setAmount(100)} className="text-[#64c2ff] text-sm ml-5 cursor-pointer">
            Max
          </p>
        </div> */}
      </div>

      <div className="flex justify-between items-center gap-x-3">
        <select
          value={swapData.src}
          onChange={(e) => {
            setSwapData({
              ...swapData,
              src: e.target.value
            })
          }}
          className="bg-transparent focus:outline-none focus:ring-0 text-2xl"
        >
          {tokens.map((token) => (
            <option value={token.address}>{token.name}</option>
          ))}
        </select>

        <input
          onChange={(e) =>
            setSwapData({
              ...swapData,
              amount: parseFloat(e.target.value)
            })
          }
          value={swapData.amount}
          type="number"
          placeholder="0"
          className="bg-transparent focus:outline-none focus:ring-0 text-2xl w-36"
        />
      </div>
    </div>
  )
}

export default FromTokenContainer
