import React from 'react'
import SwapDetails from 'src/components/SwapDetails'
import FromTokenContainer from 'src/components/TokenContainers/FromTokenContainer'
import ToTokenContainer from 'src/components/TokenContainers/ToTokenContainer'
import SwapLogo from 'src/assets/swap.png'

const Swap = () => {
  return (
    <div className="flex h-[600px] w-full flex-col items-center">
      <h1 className="text-xl font-medium">SWAP</h1>
      <FromTokenContainer />
      <img src={SwapLogo} alt="Swap logo" width={'30px'} height={'20px'} />
      <ToTokenContainer />
      <SwapDetails />
      <button className="flex h-14 w-full items-center mt-auto mb-2 justify-center rounded-lg bg-[#64c2ff] font-medium">
        Confirm Swap
      </button>
    </div>
  )
}

export default Swap
