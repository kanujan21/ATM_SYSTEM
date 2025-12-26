import {BrowserRouter as Routers } from "react-router-dom"
import { AuthProvider } from "./context/AuthContext"
import AppRouter from "./router/AppRouter"

function App() {

  return (
  <AuthProvider>
    <Routers>
      <AppRouter/>
    </Routers>
  </AuthProvider>
  )
}

export default App
