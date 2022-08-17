import React from 'react'
import { RiMailSendFill } from "react-icons/ri";
import Titel from '../../Components/Titel/Titel'
import './Home.scss'

const Home = () => {
    return (
        <>
            <section className="banner_section">
                <div className="container">
                    <div className="banner_contain">
                        <h4>Care with Quality</h4>
                        <h1>Welcome to Nijanand PHARMA</h1>
                        <span></span>
                        <p>WHO-GMP | ISO 9001:2015 Certified Pharmaceutical Manufacturer</p>
                    </div>
                </div>
            </section>
            <section className="category_icon_section">
                <div className="container">
                    <div className="category_icons">
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/tablet.png" alt="" />
                                <h1>Tablet</h1>
                            </a>
                        </div>
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/capsule.png" alt="" />
                                <h1>Capsule</h1>
                            </a>
                        </div>
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/eye-drop.png" alt="" />
                                <h1>Eye / EarDrop</h1>
                            </a>
                        </div>
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/injection.png" alt="" />
                                <h1>Injectio</h1>
                            </a>
                        </div>
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/suspension.png" alt="" />
                                <h1>Creams</h1>
                            </a>
                        </div>
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/creams.png" alt="" />
                                <h1>Suspension / syrup</h1>
                            </a>
                        </div>
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/inhaler.png" alt="" />
                                <h1>Inhaler</h1>
                            </a>
                        </div>
                        <div className="category_icon_box">
                            <a href="/">
                                <img src="https://wellonapharma.com/images/other.png" alt="" />
                                <h1>Other</h1>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="busniss_section">
                <div className="container">
                    <div className="busniss_section_top">
                        <div className="busniss_section_top_left">
                            <Titel first="Welcome to" secound="NIJANAND PHARMA" />
                            <h4>NIJANAND PHARMA, based in Surat (Gujarat), India, is a well-established name in the field of Pharmaceutical & Healthcare Industry. </h4>
                            <p>We are a Global Pharmaceutical Manufacturing and Exporting company, renowned internationally for its quality standards and efficacy of the products. <span>NIJANAND PHARMA </span> is a leading Manufacturer and Exporter of Pharmaceutical Finished Formulations such as Tablets, Capsules, Injections, Pre-filled Syringes, Inhalers/Respules, Nasal Sprays, Creams, Ointments, Eye/Ear Drops, Syrups, Suspensions, Suppositories/Pessaries, Sachets, Powders, Lozenges, Jelly & Lotions across the globe. </p>

                            <p>We have State-of-the-Art manufacturing facilities with WHO-GMP, <span>ISO 9001:2015</span> accreditations. All the facilities are equipped with ultramodern technology. We have a robust product portfolio comprising of Medicines spread over all the major therapeutic areas like Antibiotic, Antimalarial, Antiviral, Antifungal, Anticancer, Antihypertensive, Anticonvulsant, Antidepressants, NSAID, Painkiller, Anticoagulant, Antiprotozoal, Anesthetic, Antiallergic, Antidiabetic, Antacid, Antidiarrhoeal, Laxative, Antiasthmatic, Erectile Dysfunction, Contraceptive, Vitamins, Hormones, Skin care and many more. Currently, the company is into manufacturing and exporting of more than 1500 products worldwide <a href="/">Read More...</a></p>
                        </div>
                        <div className="busniss_section_top_right">
                            <h2>Get Business <span>Quote In Less</span> than 30 Minutes !</h2>
                            <a href="/">Request A Quote</a>
                            <img src="https://wellonapharma.com/images/btn-shadow.png" alt="" />
                        </div>
                    </div>
                    <div className="busniss_section_bottom">
                        <ul>
                            <li>
                                <img src="https://wellonapharma.com/admincms/gallery_img/gallery_resize_img/2-ceftriaxone-1gm-injection_1618990631.jpg" alt="" />
                                <span>New</span>
                            </li>
                            <li>
                                <img src="https://wellonapharma.com/admincms/gallery_img/gallery_resize_img/2-ceftriaxone-1gm-injection_1618990631.jpg" alt="" />
                                <span>New</span>
                            </li>
                            <li>
                                <img src="https://wellonapharma.com/admincms/gallery_img/gallery_resize_img/2-ceftriaxone-1gm-injection_1618990631.jpg" alt="" />
                                <span>New</span>
                            </li>
                            <li>
                                <img src="https://wellonapharma.com/admincms/gallery_img/gallery_resize_img/2-ceftriaxone-1gm-injection_1618990631.jpg" alt="" />
                                <span>New</span>
                            </li>
                            <li>
                                <img src="https://wellonapharma.com/admincms/gallery_img/gallery_resize_img/2-ceftriaxone-1gm-injection_1618990631.jpg" alt="" />
                                <span>New</span>
                            </li>
                            <li>
                                <div className="gallery_link">
                                    <a href="/">View All</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="service_section">
                <div className="container">
                    <Titel first='Our' secound='Service' />
                    <div className="service_section_content">
                        <div className="service_section_content_left">
                            <p>
                                One of our specializations is Contract Manufacturing and 3rd Party Manufacturing where we ensure we manufacture the required pharmaceutical drugs and make it easily accessible to the market. Whether our client would like us to modify or enhance an existing product, create a new drug or increase the present manufacturing capacity of particular medicine, our team of professionals combined with our infrastructure is always ready for it. 
                            </p>
                            <a href="/">Read more...</a>

                            <div className="call_to_action">
                                <a href="/">
                                    <RiMailSendFill />
                                    Requiest a quote
                                </a>

                                <h2><span>Get Business Quote In Less than</span> 30 Minutes !</h2>
                            </div>
                        </div>
                        <div className="service_section_content_right">
                            <div className="service_box">
                                <img src="https://wellonapharma.com/images/contract-manufacturing.jpg" alt="" />
                                <a href="/">Contract Manufacturing</a>
                            </div>
                            <div className="service_box">
                                <img src="https://wellonapharma.com/images/3rd-party-manufacturing.jpg" alt="" />
                                <a href="/">3rd Party Manufacturing</a>
                            </div>
                            <div className="service_box">
                                <img src="https://wellonapharma.com/images/generic-product.jpg" alt="" />
                                <a href="/">Generic Product</a>
                            </div>
                            <div className="service_box">
                                <img src="https://wellonapharma.com/images/loan-license.jpg" alt="" />
                                <a href="/">Institutional Tenders</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home