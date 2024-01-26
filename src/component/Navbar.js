import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
import logo from './../pic/logo.png';


export default function Navbar() {
    return (
        <>
            <div className="d-flex">
                <nav className="navbar navbar-expand-lg bg-dark d-flex flex-row main-nav">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light logo" href="#"><img src={logo} alt="" /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse nav_link" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-light" href="#">Link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="d-flex search-box flex-row">
                    <div className="d-flex justify-content-center align-items-center " style={{ marginLeft: "74px" }}>
                        <form className="d-flex " role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="">

            </div>
        </>
    )
}
