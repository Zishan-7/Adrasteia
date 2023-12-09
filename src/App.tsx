import { useCallback, useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import '@safe-global/safe-react-components/dist/fonts.css'

import Header from 'src/components/header/Header'
import Providers from 'src/components/providers/Providers'
import AuthKitDemo from 'src/pages/AuthKitDemo'
import Intro from 'src/pages/Intro'
import OnRampKitDemo from 'src/pages/OnRampKitDemo'
import RelayerKitDemo from 'src/pages/RelayerKitDemo'
import NavMenu from './components/nav-menu/NavMenu'
import SafeCoreInfo from './components/safe-core-info/SafeCoreInfo'
import { useAccountAbstraction } from './store/accountAbstractionContext'
import isMoneriumRedirect from './utils/isMoneriumRedirect'

function App() {
  const { setChainId } = useAccountAbstraction()
  const [activeStep, setActiveStep] = useState(1)

  useEffect(() => {
    if (isMoneriumRedirect()) {
      setActiveStep(2)
    }
  }, [setChainId])

  const nextStep = useCallback(() => {
    setActiveStep((activeStep) => activeStep + 1)
  }, [])

  const previousStep = useCallback(() => {
    setActiveStep((activeStep) => activeStep - 1)
  }, [])

  const setStep = useCallback((newStep: number) => {
    setActiveStep(newStep)
  }, [])

  const isFirstStep = activeStep === 0
  const isLastStep = activeStep === steps.length - 1

  const showSafeCoreVideo = isFirstStep

  const ActiveStepComponent = steps[activeStep].component
  const nextLabel = steps[activeStep].nextLabel

  return (
    <Providers>
      <>
        <CssBaseline />
        <Header setStep={setStep} />

        {/* App header */}
        <Box
          display="flex"
          gap={3}
          alignItems="flex-start"
          flexDirection="column"
          maxWidth="100px"
          margin="0"
        >
          <main style={{ flexGrow: 1 }}>
            {/* Active Step Component */}
            <ActiveStepComponent setStep={setStep} />
          </main>
        </Box>
        <NavMenu setStep={setStep} activeStep={activeStep} />
      </>
    </Providers>
  )
}

export default App

const steps = [
  {
    // Auth Kit step
    component: AuthKitDemo,
    nextLabel: 'to Onramp Kit'
  },
  {
    // Onramp Kit step
    component: OnRampKitDemo,
    nextLabel: 'to Relay Kit'
  },
  {
    // Relay Kit step
    component: RelayerKitDemo
  }
]
