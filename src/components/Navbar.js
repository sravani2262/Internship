import React, { useState } from 'react';
import { Link } from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {ImCross} from "react-icons/im"
import {VscAccount} from "react-icons/vsc"
import {IoMdCart} from "react-icons/io"
import './NavbarStyles.css';

export default function Navbar(){
    const [Menu, setMenu]=useState(false)
    return(
        <nav className="navbar">
           
            <h1 className="company-name">Karo Abhayaas</h1>
            <ul className={Menu ? "nav-links-menu" : "nav-links"} onClick={()=>setMenu(false)}>
                <Link to='/'><li>Join Us</li></Link>
                <Link to='/classes'><li>Classes</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/AboutUs'><li>About Us</li></Link>
                <Link to='/profile'><li><VscAccount /></li></Link>
                <Link to='/cart'><li><IoMdCart/></li></Link>
                
            </ul>
            <button className="menu-icon" onClick={()=>setMenu(!Menu)}>
                {Menu ? <ImCross/> : <FaBars/> }
                
            </button>
           

        </nav>         
    );
}