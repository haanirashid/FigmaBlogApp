import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <>
    <div className="footer">
        <div className="top">
            <div className="title">
                <img src="./images/logo-img.png" alt="logo-error" />
                <h1>Zarrin</h1>
            </div>
            <div className="footer_list">
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/blog">Blog</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
            </div>
            <div className="social">
                <button>FB</button>
                <button>IG</button>
                <button>LN</button>
                <button>YT</button>
            </div>
        </div>
        <div className="bottom">
            <h2>Copy Right ideapeel © 2025 All Right Reserved</h2>
        </div>
    </div>
    </>
  )
}

export default Footer