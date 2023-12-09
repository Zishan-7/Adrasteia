import { ethers } from 'ethers'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

const WalletCard = () => {
  const { safeBalance } = useAccountAbstraction()
  return (
    <div className="w-full h-[200px] bg-[#64c2ff] rounded-lg flex flex-col items-center justify-center">
      <p className="text-sm text-white">Balance</p>
      <p className="text-white font-medium text-3xl">
        {ethers.formatEther(safeBalance || '0').substring(0, 5)} MATIC
      </p>
    </div>
  )
}

export default WalletCard
