import { ThemeProvider } from 'src/store/themeContext'
import { AccountAbstractionProvider } from 'src/store/accountAbstractionContext'

const Providers = ({ children }: { children: JSX.Element }) => {
  return <AccountAbstractionProvider>{children}</AccountAbstractionProvider>
}

export default Providers
