import React from 'react';
import logo from '../../Images/ICON/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link className="navbar-brand" to="/"><img src={logo} alt=""/></Link>

                <div className="collapse navbar-collapse  d-flex justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link"><FontAwesomeIcon icon={faShoppingCart} /></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                <button className="btn btn-danger btn-rounded btn-sm">Sign Up</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;