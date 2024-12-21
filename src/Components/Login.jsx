import  { useContext, useState } from 'react';
import { UserLoginContext } from '../Context/userAuth';

export default function Login() {
    
    const {authState,IsLogin,IsLogout} = useContext(UserLoginContext)
    console.log(authState.token);
    

    const [email,setemail] = useState();
    const [password,setpassword] = useState();
    
    

    function handelsubmit(e){
        e.preventDefault()

        const myobj={
            email,
            password
        }
  
   console.log(myobj)


     fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify(myobj)
     }).then((res)=>{
        return res.json();
     }).then((data)=>{
        if (data.token) {
            IsLogin(data.token) 
        }else{
            IsLogout()
        }

        
     })
     .catch((err)=>{console.log(err)});
    }
    
    return (
        <>
        
        <div>
            <form data-testid = "auth_form" onSubmit={handelsubmit}  
            style={{
                maxWidth: "400px",
                margin: "0 auto",
                padding: "20px",
              }}  >
                <input
                    type = "email"
                    data-testid = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>{setemail(e.target.value)}}
                    style={{
                        width: "100%",
                        padding: "10px",
                        margin: "10px 0",
                        fontSize: "16px",
                        boxSizing: "border-box",
                      }}
                />
                <br />
                <input
                    type = "password"
                    data-testid = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>{setpassword(e.target.value)}}
                    style={{
                        width: "100%",
                        padding: "10px",
                        margin: "10px 0",
                        fontSize: "16px",
                        boxSizing: "border-box",
                      }}
                />
                <br />
                <input type = "submit"  
                style={{
                    width: "100%",
                    padding: "10px",
                    margin: "10px 0",
                    backgroundColor: "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }} />

            </form>                
        </div>

      
        </>
    )
}
