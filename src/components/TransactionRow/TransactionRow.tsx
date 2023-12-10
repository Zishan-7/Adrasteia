interface TransactionRowProps {
  address: string
  amount: number
  isSender: boolean
}

const TransactionRow = ({ address, amount, isSender }: TransactionRowProps) => {
  const formattedAddress = `${address.substring(0, 5)}....${address.substring(38, 42)}`
  return (
    <div className="w-full h-[50px] my-2 border border-t-0 border-b border-x-0 border-gray-400 flex items-center justify-between">
      <p className="text-sm">
        {isSender ? `Sent to ${formattedAddress}` : `Received from ${formattedAddress}`}
      </p>
      <p className="text-sm">{amount} MATIC</p>
    </div>
  )
}

export default TransactionRow
