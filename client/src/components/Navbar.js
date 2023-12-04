import React, {useState, useEffect, useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import '../App.css';
import {userContext} from '../App';

const Menu = () => {
    const {state, dispatch} = useContext(userContext);
    if (state) {
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" to="/logout">Logout</NavLink>
                </li>
            </>
        );
    } else {
        return (
            <>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" to="/contact">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" to="/signin">SignIn</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link navlist fs-6 fw-bold" to="/register">Register</NavLink>
                </li>
            </>
        );
    }
}


const Navbar = () => {  
    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <span className="fw-bold fs-2 alertnavbar-brand"><span className = "text-primary">Data</span>Dynamo</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                   <Menu/>      
                </ul>
                </div>
            </div>
            </nav>
        </>
    )
}

export default Navbar;