const SwapDetails = () => {
  return (
    <div className="mt-4 w-full border border-[#005792] rounded-lg mb-2 p-3 flex flex-col gap-y-3">
      <div className="w-full flex items-center justify-between">
        <p className="text-gray-500 text-sm">Rate</p>
        <p className="text-sm">1 ETH = 1092 MATIC</p>
      </div>
      <div className="w-full flex items-center justify-between">
        <p className="text-gray-500 text-sm">Est. network fee</p>
        <p className="text-sm">0.0012 ETH</p>
      </div>{' '}
      <div className="w-full flex items-center justify-between">
        <p className="text-gray-500 text-sm">Fee</p>
        <p className="text-sm">0</p>
      </div>
    </div>
  )
}

export default SwapDetails
