import React from 'react'
import { MdPlace, MdPhoneAndroid, MdLocalPhone, MdKeyboardArrowRight } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import './Footer.scss'

const Footer = () => {
    return (
        <>
            <section className="main_footer">
                <div className="container">
                    <div className="footer_contact_section">
                        <div className="footer_contact_box">
                            <button>
                                <div className="footer_contact_box_left">
                                    <span>Address</span>
                                    <h5>Fiend Us On Map</h5>
                                </div>
                                <div className="footer_contact_box_right">
                                    <img src="https://wellonapharma.com/images/well_foot_add.png" alt="" />
                                </div>
                            </button>
                        </div>
                        <div className="footer_contact_box">
                            <button>
                                <div className="footer_contact_box_left">
                                    <span>Phone</span>
                                    <h5>+91 76000 67087</h5>
                                </div>
                                <div className="footer_contact_box_right">
                                    <img src="https://wellonapharma.com/images/well_foot_phone.png" alt="" />
                                </div>
                            </button>
                        </div>
                        <div className="footer_contact_box">
                            <button>
                                <div className="footer_contact_box_left">
                                    <span>Email</span>
                                    <h5>info@farma.com</h5>
                                </div>
                                <div className="footer_contact_box_right">
                                    <img src="https://wellonapharma.com/images/well_foot_email.png" alt="" />
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="main_footer_content">
                        <div className="footer_conntent_box">
                            <div className="footer_content_title">
                                <h1><span>Additional</span> Links</h1>
                            </div>
                            <ul>
                                <li>
                                    <MdPlace />
                                    <div className="footer_box_content">
                                        <h1> Corporate Address</h1>
                                        <p>Wellona Pharma
                                            243, Leonard Square, Yogi Chowk
                                            Nana Varachha, Surat, Gujarat
                                            India - 395006
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <MdPhoneAndroid />
                                    <p> Mobile: +91 76000 67087 </p>
                                </li>
                                <li>
                                    <MdLocalPhone />
                                    <p> Phone: +91 76000 67087  </p>
                                </li>
                                <li>
                                    <HiOutlineMail />
                                    <p> contact@pharma.com </p>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_conntent_box">
                            <div className="footer_content_title">
                                <h1><span>Get</span> in touch</h1>
                            </div>
                            <ul>
                                <li><h1>Sterile</h1></li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_conntent_box">
                            <div className="footer_content_title" style={{marginBottom : '55px'}} >
                            </div>
                            <ul>
                                <li><h1>Non-Sterile</h1></li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                                <li><a href="/">
                                        <MdKeyboardArrowRight />
                                        Liquid Injections
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer_conntent_box">
                            <div className="footer_content_title">
                                <h1><span>Get</span> in touch</h1>
                            </div>
                            <div className="newslat6ter_section">
                                <form action="#">
                                    <input type="text" placeholder='Your Name' />
                                    <input type="mail" placeholder='Your Gmail' />
                                    <button>Subscribe</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer