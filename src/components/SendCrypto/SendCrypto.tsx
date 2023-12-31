import { LinearProgress } from '@mui/material'
import { useState } from 'react'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

interface SendCryptoProps {
  getTransactions: (address: string) => Promise<void>
}

const SendCrypto = ({ getTransactions }: SendCryptoProps) => {
  const [address, setaddress] = useState('')
  const [amount, setAmount] = useState(0)
  const { relayTransaction, isRelayerLoading, safeSelected } = useAccountAbstraction()

  if (isRelayerLoading) {
    return (
      <div className="h-[200px] flex flex-col justify-center w-full mt-2">
        <p className="mb-2"> Please wait your transaction is processing</p>
        {isRelayerLoading && <LinearProgress sx={{ alignSelf: 'stretch' }} />}
      </div>
    )
  }

  return (
    <div className="h-[200px] w-full mt-2">
      <label className="text-sm" htmlFor="walletAddress">
        Wallet Address
      </label>
      <input
        onChange={(e) => setaddress(e.target.value)}
        name="walletAddress"
        type="text"
        className="w-full border border-[#005792] rounded-lg p-2"
      />

      <div className="flex w-full gap-x-4 mt-4">
        <div className="flex flex-col">
          <label className="text-sm" htmlFor="amount">
            Amount
          </label>
          <input
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            name="amount"
            type="number"
            className="w-full border border-[#005792] rounded-lg p-2"
          />
        </div>
        <button
          onClick={async () => {
            await relayTransaction(address, amount)
            getTransactions(safeSelected ? safeSelected : '')
          }}
          className="flex h-11 text-white w-1/2 items-center mt-auto  justify-center rounded-lg bg-[#005792] font-medium"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default SendCrypto
