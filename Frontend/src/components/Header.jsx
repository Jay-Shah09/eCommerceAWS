import React from 'react'
import { NavLink } from 'react-router-dom'
import CartBtn from './buttons/CartBtn'
// import Login from './buttons/Login'
// import Signup from './buttons/Signup'
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid py-2">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Product</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            
                            
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bold" to="/">APPLE MART</NavLink>
                    <Link to="/login" className="login-link-res" href="#" style={{color:"black", textDecoration:"none", marginRight:"15px", border:"1px solid black", padding:"6px 11px", borderRadius:"3px"}}>Login</Link>
                    <Link to="/Register" className="login-link-res" href="#" style={{color:"black", textDecoration:"none", marginRight:"15px", border:"1px solid black", padding:"6px 11px", borderRadius:"3px"}}>Register</Link>
                    <CartBtn/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
