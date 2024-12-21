
import { useContext } from 'react'
import './App.css'
import Login from './Components/Login'
import { UserLoginContext } from './Context/userAuth'
import { Dashboard } from './Components/Dashboard'


function App() {
    
  const {authState} = useContext(UserLoginContext)
   console.log(authState.isAuth);
   
  return (
    <>
      {authState.isAuth ? <Dashboard /> : <Login />}
    </>
  )
}

export default App
