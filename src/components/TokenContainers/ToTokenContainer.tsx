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

interface ToTokenContainerProps {
  swapData: any
  setSwapData: any
}

const ToTokenContainer = ({ swapData, setSwapData }: ToTokenContainerProps) => {
  return (
    <div className="my-2 h-32 w-full rounded-lg bg-[#f0f5f9] flex flex-col p-3 gap-y-5">
      <div className="flex items-center  gap-x-3">
        <p className="text-sm text-gray-400">To</p>
        {/* <p className="text-lg text-gray-700">MATIC</p> */}

        <div className="flex ml-auto">
          <p className="text-sm text-gray-400 font-light">Balance : 0.002</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-x-3">
        <select
          value={swapData.dst}
          onChange={(e) => {
            setSwapData({
              ...swapData,
              dst: e.target.value
            })
          }}
          className="bg-transparent focus:outline-none focus:ring-0 text-2xl"
        >
          {tokens.map((token) => (
            <option value={token.address}>{token.name}</option>
          ))}
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
