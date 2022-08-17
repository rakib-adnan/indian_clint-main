import React, { useState } from 'react'
import { FaHome, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import {Link} from 'react-router-dom';
import './Header.scss'

const Header = () => {

    // Sub Menu Click Handler
    const handleSubMenu = (e) => {
        e.preventDefault()

        if(!e.target){
            alert()
        }

        if( e.target.nextElementSibling.style.display === 'none' ){
            e.target.nextElementSibling.style.display = 'block';
            e.target.classList.add('active')
        }else if( !e.target ){
            e.target.nextElementSibling.style.display = 'none';
            e.target.classList.remove('active')
        }else if( e.target.nextElementSibling.style.display === 'block' ){
            e.target.nextElementSibling.style.display = 'none';
            e.target.classList.remove('active')
        }        
    }
    return (
        <>
            <div className="top_hader">
                <div className="container">
                    <div className="top_menu_body">
                        <div className="logo">
                            <a href="/">
                                <img src="https://i.ibb.co/kHkkFYT/Nijanand-Pharma-Logo-new.png" alt="logo" />
                            </a>
                        </div>
                        <div className="top_slider">
                            
                        </div>
                        <div className="search_and_language">
                            {/* <button>
                                <FaSearch />
                            </button> */}
                            <select name="" id="">
                                <option value="">English</option>
                                <option value="">Bangla</option>
                                <option value="">Hendi</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_header">
                <div className="container">
                    <div className="main_menu_contennt">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/" onClick={handleSubMenu} >Company Profile</a>
                                <ul style={{ display : 'none' }} >
                                    <li><a href="/">About us</a></li>
                                    <li><a href="/">Mission Vision</a></li>
                                    <li><a href="/">Business Value</a></li>
                                    <li><a href="/">Management</a></li>
                                    <li><a href="/">Why us</a></li>
                                    <li><a href="/">Quality Policy</a></li>
                                    <li><a href="/">Client Satisfaction</a></li>
                                </ul>
                            </li>
                            <li><Link to="/global">GLOBAL PRESENCE</Link></li>
                            <li><a href="/" onClick={handleSubMenu}>INFRASTRUCTURE</a>
                                <ul style={{display : 'none'}}>
                                    <li><Link to="/manufacturing">Manufacturing</Link></li>
                                    <li><Link to="/packaging">Packaging</Link></li>
                                    <li><Link to="/research">R & D</Link></li>
                                </ul>
                            </li>
                            <li><a href="/" onClick={handleSubMenu}>PRODUCTS</a></li>
                            <li><a href="/" onClick={handleSubMenu}>SERVICES</a>
                                <ul style={{display : 'none'}}>
                                    <li><a href="/">Contract Manufacturing</a></li>
                                    <li><a href="/">3 <sup>rd</sup> Party Manufacturing</a></li>
                                    <li><a href="/">Institutional Tenders</a></li>
                                    <li><a href="/">Generic Medicines</a></li>
                                    <li><a href="/">OTC Products</a></li>
                                    <li><a href="/">Regulatory Service</a></li>
                                    <li><a href="/">QC / QA</a></li>
                                </ul>
                            </li>
                            <li><a href="/">GALLERY</a></li>
                            <li><a href="/">BLOG</a></li>
                            <li><a href="/">CONTACT US</a></li>
                        </ul>
                        <div className="main_menu_social_icon_box">
                            <ul>
                                <li>
                                    <a href="/">
                                        <FaFacebookF />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <FaLinkedinIn />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <IoLogoGoogleplus />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <FaYoutube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcum">
                <div className="container">
                    <div className="breadcum_content">
                        <ul>
                            <li><a href="/"> <FaHome /> Home</a></li>
                            <li><a href="/"> About</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
// Changes by Nur Amin