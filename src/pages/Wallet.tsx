import { useState } from 'react'
import SendCrypto from 'src/components/SendCrypto/SendCrypto'
import TransactionRow from 'src/components/TransactionRow/TransactionRow'
import WalletCard from 'src/components/WalletCard/WalletCard'

const Wallet = () => {
  return (
    <div className="flex h-[600px] w-full flex-col">
      <WalletCard />
      <p className="text-lg mt-2 font-medium">Send Crypto</p>
      <SendCrypto />

      <p className="text-lg mt-2 font-medium">Recent Transactions</p>
      <div className="h-[200px] w-full overflow-y-scroll mt-2">
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
        <TransactionRow />
      </div>
    </div>
  )
}

export default Wallet
