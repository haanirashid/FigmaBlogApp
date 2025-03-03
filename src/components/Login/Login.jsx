import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/Firebase/Firebase.js'
import { useState } from 'react'
import Swal from 'sweetalert2'

function Login() {
  const navi = useNavigate();
  const [userLogObj, setUserLogObj] = useState({
    userLogEmail: "",
    userLogPass: ""
  })

  const handleLogValue = (e) => {
    setUserLogObj({ ...userLogObj, [e.target.name]: e.target.value })
  }

  const handleLogSub = async (e) => {
    e.preventDefault();
    try {

      let userLogData = await signInWithEmailAndPassword(auth, userLogObj.userLogEmail, userLogObj.userLogPass);
      console.log(userLogData);
      window.localStorage.setItem("logStatus", 1);
      Swal.fire({
        title: 'Success!',
        text: "You have Successfully Logged in!",
        icon: 'success',
        confirmButtonText: 'Next'
      });
      navi("/createblog");
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try Again'
      });

    }


  }

  return (
    <>
      <div className="main_log">
        <form onSubmit={handleLogSub}>
          <h1>Login</h1>
          <input type="email" name="userLogEmail" onChange={handleLogValue} placeholder='Enter Email' />
          <input type="password" name="userLogPass" onChange={handleLogValue} placeholder='Enter Password' />
          <button type='submit'>Login</button>
          <p>Do not have an Account <Link to="/signin">Signin</Link></p>
          <p>Visit Website as a Guest <Link to="/">HomePage</Link></p>
        </form>
      </div>
    </>
  )
}

export default Login