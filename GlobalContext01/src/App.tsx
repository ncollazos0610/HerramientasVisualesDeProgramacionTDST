import { AuthProvider } from './context/AuthContext'
import { LoginPage } from './components/LoginPage'
import './App.css'



function App() {

  return (

    <AuthProvider>

      <LoginPage />

    </AuthProvider>

  )

}

export default App