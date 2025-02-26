import { NavLink } from "react-router-dom"
import { useRef } from "react"
import logoImg from '/images/logo-img.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons"
import './Navbar.css'
function Navbar() {
    var navList = useRef(null);
    function navMedia(){
      var stat =   navList.current.classList.toggle("active")
        console.log(stat);
        
    }
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <img src={logoImg} alt="error-logo-img" />
                    <h1>Zarrin</h1>
                </div>
                <div className="list" ref={navList}>
                    <ul>
                        <li><NavLink to="/">Blog</NavLink> </li>
                        <li><NavLink to="/">About Us</NavLink> </li>
                        <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                        <li><button>Contact Us</button></li>
                    </ul>
                </div>
                <div className="icon">
                    <FontAwesomeIcon onClick={navMedia} icon={faBars} className="menu-icon"/>
                </div>
            </div>
        </>
    )
}

export default Navbar