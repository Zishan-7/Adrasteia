import React from 'react'

const TransactionRow = () => {
  return (
    <div className="w-full h-[50px] my-2 border border-t-0 border-b border-x-0 border-gray-400 flex items-center justify-between">
      <p className="text-sm">Received from 0x73..83793</p>
      <p className="text-sm">10 USDC</p>
    </div>
  )
}

export default TransactionRow
