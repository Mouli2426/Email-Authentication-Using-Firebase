

import { useRef, useState } from "react";
import {signup,login,logout,useAuth} from "./mailath"
function App(){

const [loading,setLoading]=useState(false)


const currentUser=useAuth()

const emailRef=useRef()
const passwordRef=useRef()

async function handleSighnup(){
  setLoading(true)
  await signup(emailRef.current.value,passwordRef.current.value)
  setLoading(false)
}
async function handleLogin(){
  try{
    setLoading(true)
  await login(emailRef.current.value,passwordRef.current.value)
  }
  catch{
    alert("craete account first")
  }
}

async function handleLogout(){
setLoading(true)

  await logout()


}

  return(
    <div>
      <center>
        <h4>Current User:{currentUser?.email}</h4>
      <label>Email:</label>
      <input type="email" ref={emailRef} placeholder="Enter Your Email"/>
      <br/><br/>
      <label>Password:</label>
      <input type="password" ref={passwordRef} placeholder="Enter your password"/>
      <br/><br/>
      <button disabled={loading || currentUser} onClick={handleSighnup}>SignUp</button>
      <button disabled={loading || currentUser} onClick={handleLogin}>Login</button>
      <button disabled={loading || !currentUser} onClick={handleLogout}>Logout</button>
      </center>
    </div>
  )
}

export default App;