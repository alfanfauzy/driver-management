import React from 'react'
import { Burger } from './Burger'
import logo from '../../Image/shipper.svg';
import { BsFillPersonFill } from "react-icons/bs";
import './Navbar.css'

export const Navbar = () => {

    return (
        <nav>
            <Burger />
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="user">
                <p className="user-text">Hello, <span>Shipper User</span></p>
                <span className="user-logo">
                    <BsFillPersonFill className="user-icon" />
                </span>
            </div>
        </nav>
    )
}
