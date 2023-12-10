import React, { useState } from 'react'
import { Theme, styled } from '@mui/material'
import CustomTabs from './components/CustomTabs'
import Swap from './pages/Swap'
import Wallet from './pages/Wallet'
import { useAccountAbstraction } from './store/accountAbstractionContext'
import App from './App'
import { ArrowCircleDown, ArrowDropDown, ArrowDropUp, ArrowUpward } from '@mui/icons-material'
import Ecom from './pages/Ecom'

const TabContainer = ({ value }: { value: number }) => {
  if (value == 0) {
    // return <App />
    return <Wallet />
  }

  return <Swap />
}

const Appc = () => {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [value, setValue] = React.useState(0)

  const { loginWeb3Auth, isAuthenticated, chainId } = useAccountAbstraction()

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev)
  }

  return (
    <React.Fragment>
      <Ecom />
      <ChatButton onClick={toggleChat} isOpen={isChatOpen}>
        {isChatOpen ? <ArrowDropDown /> : <ArrowDropUp />}
      </ChatButton>
      {isChatOpen && (
        <ChatWidget>
          {!isAuthenticated ? (
            <div className="flex h-[600px] w-full flex-col justify-center items-center">
              <button
                onClick={loginWeb3Auth}
                className="flex text-white h-14 w-full items-center justify-center rounded-lg bg-[#005792] font-medium"
              >
                Login
              </button>
            </div>
          ) : (
            <>
              <TabContainer value={value} />
              <CustomTabs value={value} setValue={setValue} />
            </>
          )}
        </ChatWidget>
      )}
    </React.Fragment>
  )
}

export default Appc

const ChatButton = styled('button')<{ isOpen: boolean }>(
  ({ theme, isOpen }) => `
      position: fixed;
      bottom:  16px;
      right: 30px;
      border: none;
      width:5px;
      height:5px;
      border-radius: 50%;
      background-color: #005792;
      color: ${theme.palette.getContrastText(theme.palette.secondary.light)};
      padding: 25px;
      cursor: pointer;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
      z-index: ${isOpen ? '9999' : '999'};
      display: flex;
      align-items: center;
      justify-content: center;
    `
)

const ChatWidget = styled('div')<{
  theme?: Theme
}>(
  ({ theme }) => `
    position: fixed;
    bottom: 80px;
    right: 16px;
    border-radius: 8px;
    width: 450px;
    height: 700px;
    background-color:white;
    color: black;
    padding: 30px;
    z-index: 9999; /* Ensure the chat widget is above other elements */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  `
)
