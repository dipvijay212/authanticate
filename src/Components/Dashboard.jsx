import  { useContext } from 'react'
import { UserLoginContext } from '../Context/userAuth';


export const Dashboard = () => {

    const {authState,IsLogout} = useContext(UserLoginContext)
    

    return (
        <div >
            <h3 data-testid = "token" >Token: {authState.token}</h3>
            <button data-testid = "logout"  onClick={IsLogout} >LOGOUT</button>
        </div>
    ) 
}
