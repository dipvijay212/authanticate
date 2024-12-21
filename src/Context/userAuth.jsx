import  {createContext, useState} from 'react'
 
 export const UserLoginContext = createContext();



function AuthContext({children}) {
  const [authState, setAuthState] = useState({
    isAuth: false,
    loading: false,
    error: null,
    token: "",
  });


  const IsLogin = (value) => {
    setAuthState({
      isAuth: true,
      loading: false,
      error: null,
      token: value
    });
  };

  const IsLogout = () => {
    setAuthState({
      isAuth: false,
      loading: false,
      error: null,
      token: "",
    });
  };

  return (
  
    <UserLoginContext.Provider value={{ authState, IsLogin, IsLogout }}>
    {children}
    </UserLoginContext.Provider>
  
  )
}
export default AuthContext
