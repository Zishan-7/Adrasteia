import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import DarkThemeIcon from '@mui/icons-material/Brightness4'
import LightThemeIcon from '@mui/icons-material/Brightness7'

import ChainLabel from 'src/components/chain-label/ChainLabel'
import safeHeaderLogo from 'src/assets/safe-header-logo.svg'
import { useTheme } from 'src/store/themeContext'
import { useAccountAbstraction } from 'src/store/accountAbstractionContext'

type HeaderProps = {
  setStep: (newStep: number) => void
}

function Header({ setStep }: HeaderProps) {
  const { switchThemeMode, isDarkTheme } = useTheme()

  const { chain } = useAccountAbstraction()

  return <AppBar position="static"></AppBar>
}

export default Header
