import { useState } from 'react'
import './Signin.css'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/Firebase/Firebase.js'
import Swal from 'sweetalert2'

function Signin() {
    const navi = useNavigate();
    const [userSignObj, setUSerSignObj] = useState({
        userSignName: "",
        userSignEmail: "",
        userSignPass: ""
    });

    const handleSignValue = (e) => {
        setUSerSignObj({
            ...userSignObj, [e.target.name]: e.target.value
        })
    }

    const handleSignSub = async (e) => {
        e.preventDefault();

        try {
            let userSignData = await createUserWithEmailAndPassword(auth, userSignObj.userSignEmail, userSignObj.userSignPass, userSignObj.userSignName);
            console.log(userSignData);
            Swal.fire({
                title: 'Success!',
                text: "You have Successfully Signed in!",
                icon: 'success',
                confirmButtonText: 'Next'
            });
            navi('/login')
        }
        catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error.msg,
                icon: 'error',
                confirmButtonText: 'Try Again'
            });
        }
    }

    return (
        <>
            <div className="main_sign">
                <form onSubmit={handleSignSub}>
                    <h1>Sign in</h1>
                    <input type="text" onChange={handleSignValue} name="userSignName" placeholder='Enter Full Name' />
                    <input type="email" onChange={handleSignValue} name="userSignEmail" placeholder='Enter Email' />
                    <input type="password" onChange={handleSignValue} name="userSignPass" placeholder='Enter Password' />
                    <button type='submit'>Sign in</button>
                    <p>Already have an account? <Link to="/login">Login</Link></p>
                    <p>Visit Website as a Guest <Link to="/">HomePage</Link></p>
                </form>
            </div>
        </>
    )
}

export default Signin