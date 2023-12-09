import React, { useState } from 'react'
import SwapDetails from 'src/components/SwapDetails'
import FromTokenContainer from 'src/components/TokenContainers/FromTokenContainer'
import ToTokenContainer from 'src/components/TokenContainers/ToTokenContainer'
import SwapLogo from 'src/assets/swap.png'
import axios from 'axios'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

const Swap = () => {
  const { safeSelected } = useAccountAbstraction()
  const [swapData, setSwapData] = useState({
    src: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    dst: '0x250632378e573c6be1ac2f97fcdf00515d0aa91b',
    slippage: 1,
    disableEstimate: false,
    allowPartialFill: false
  })

  // const url = `https://api.1inch.dev/swap/v5.2/${swapData.chainId}/tokens`
  // const config = {
  //   headers: {
  //     Authorization: 'Bearer d6nisavkYlWBvh7eu0IcI1ShZ1OqGNcG'
  //   },
  //   params: {}
  // }

  // const GetTokenList = async () => {
  //   try {
  //     const response = await axios.get(url, config)
  //     console.log(response.data)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  return (
    <div className="flex h-[600px] w-full flex-col items-center">
      <h1 className="text-xl font-medium">SWAP</h1>
      <FromTokenContainer swapData={swapData} setSwapData={setSwapData} />
      <img src={SwapLogo} alt="Swap logo" width={'30px'} height={'20px'} />
      <ToTokenContainer swapData={swapData} setSwapData={setSwapData} />
      <SwapDetails />
      <button
        onClick={() => console.log({ ...swapData, from: safeSelected })}
        className="flex h-14 w-full items-center mt-auto mb-2 justify-center rounded-lg bg-[#64c2ff] font-medium"
      >
        Confirm Swap
      </button>
    </div>
  )
}

export default Swap
