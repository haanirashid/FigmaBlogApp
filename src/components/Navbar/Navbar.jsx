import { NavLink } from "react-router-dom"
import { useRef } from "react"
import logoImg from '/images/logo-img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons"
import './Navbar.css'
function Navbar() {
    var navList = useRef(null);
    function navMedia() {
        var stat = navList.current.classList.toggle("active")
        console.log(stat);
    }
    var loginStatus = window.localStorage.getItem("logStatus");
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <NavLink to="/">
                        <img src={logoImg} alt="error-logo-img" />
                        <h1>Zarrin</h1>
                    </NavLink>
                </div>
                <div className="list" ref={navList}>
                    <ul>
                        <li><NavLink to="/blog">Blog</NavLink> </li>
                        <li><NavLink to="/">About Us</NavLink> </li>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                        {
                            loginStatus === "0" ? <li><button><NavLink to="/Signin">Create Blog</NavLink></button></li> : 
                            <li><button><NavLink to="/createblog">Create Blog</NavLink></button></li>
                        }
                        {/*  <li><button><NavLink to="/createblog">Create Blog</NavLink></button></li> */}
                    </ul>
                </div>
                <div className="icon">
                    <FontAwesomeIcon onClick={navMedia} icon={faBars} className="menu-icon" />
                </div>
            </div>
        </>
    )
}

export default Navbar