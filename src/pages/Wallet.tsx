import axios from 'axios'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import SendCrypto from 'src/components/SendCrypto/SendCrypto'
import TransactionRow from 'src/components/TransactionRow/TransactionRow'
import WalletCard from 'src/components/WalletCard/WalletCard'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

const Wallet = () => {
  const { safeSelected } = useAccountAbstraction()
  const [txns, setTxns] = useState<any[]>([])

  const getTxns = async (address: string) => {
    try {
      const res = await axios.get(
        `https://api-testnet.polygonscan.com/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=desc&apikey=I4V4N11CARCK9875D8WN5QHZ44C3KWU864`
      )

      setTxns(res.data.result)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (safeSelected) {
      getTxns(safeSelected)
    }
  }, [safeSelected])

  return (
    <div className="flex h-[600px] w-full flex-col">
      <WalletCard />
      <p className="text-lg mt-2 font-medium">Send Crypto</p>
      <SendCrypto getTransactions={getTxns} />

      <p className="text-lg mt-2 font-medium">Recent Transactions</p>
      <div className="h-[200px] w-full overflow-y-scroll mt-2">
        {safeSelected &&
          txns.map((txn) => (
            <TransactionRow
              address={txn.from == safeSelected.toLowerCase() ? txn.to : txn.from}
              isSender={txn.from == safeSelected.toLowerCase()}
              amount={parseFloat(ethers.formatEther(txn.value || '0').substring(0, 5))}
            />
          ))}
      </div>
    </div>
  )
}

export default Wallet
