import React from 'react';
import Auth from './UseAuth';
import { Link } from 'react-router-dom';
import logo from '../../Images/ICON/logo2.png'
import './Login.css';

const Login = () => {
    const auth = Auth();
    console.log(auth);
    return (
        <div className="container sign-up">
            <div className="container">
                <div className="logo text-center">
                    <Link to="/">
                        <img src={logo} alt=""/>
                    </Link>
                </div>
                <form className="py-5">
                    <div className="form-group">
                        <input name="email" className="form-control" placeholder="Email"/>
                        <span className="error">Email is required</span>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control"  placeholder="Password" />
                        <span className="error">Password is required</span>
                    </div>
                    
                    <div className="form-group">
                        <button className="btn btn-danger btn-block" type="submit">Sign In</button>
                    </div>
                    <div className="option text-center">
                        <label >Create a new Account</label>
                    </div>
                </form>
                <form className="py-5">
                    <div className="form-group">
                        <input name="name" className="form-control" placeholder="Name" />
                        <span className="error">Name is required</span>
                    </div>
                    <div className="form-group">
                        <input name="email" className="form-control" placeholder="Email"/>
                            <span className="error">Email is required</span>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" placeholder="Password" />
                            <span className="error">Password is required</span>
                    </div>
                    <div className="form-group">
                        <input type="password" name="confirm_password" className="form-control" placeholder="Confirm Password" />
                        <span className="error">Passwords don't match.</span>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-danger btn-block"  type="submit">Sign Up</button>
                    </div>
                    <div className="option text-center">
                        <label>Already Have an Account</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;