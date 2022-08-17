import React from 'react'
import Titel from '../../Components/Titel/Titel';
import './Global.scss'

const Global = () => {
  return (
    <>
    <div className="global-section">
        <div className="container">
              <div className="global-title">
                <Titel first="GLOBAL" secound=" PRESENCE"/>
             </div>
                <div className="global-description">
                    <p>
                    Wellona Pharma currently exports to over 86 countries and 5 continents globally which include North America, CIS, Latin America, Africa and South-East Asia. With over 380 International Product Registrations (still expanding), we are emerging as a major potential Indian Pharmaceuticals manufacturer.
                    </p>
                    <p>
                    Streamlining the export vision at Wellona Pharma, a dedicated Export regulatory department team has been set up for complying with international audits and providing complete export documentation including COPP and dossier preparations as per CTD format. Operating in total compliance with c-GMP norms, Wellona pharma’s manufacturing unit has been granted certifications by many regulatory Agencies.
                    </p>
                    <p>We endeavor to become the world class pharmaceutical manufacturer for India & neighboring countries and to assist in the development of quality products by providing superior performance with high Quality products in right budget. Our formulation development team and regulatory department are focused on bringing latest generics to our markets thereby guaranteeing a constant flow of the latest products to our customers.
                    </p>
                </div>
                <h6 class="h6" >Our Branded and Generic medicines enjoy steady demand in following countries:</h6>

                <div className="table-section">
                    <table class="table table-bordered m-t-20" >
                        <tbody>
                                <tr>
                                    <td class="b-green"><strong >Asia</strong></td>
                                    <td >Afghanistan, Israel, Jordan, Pakistan, Russia, Saudi Arabia, Singapore, Syria, Philippines, Turkey, Turkmenistan, Uzbekistan, Yemen, Vietnam, Indonesia, Malaysia, Iran, Tajikistan</td>
                                </tr>
                                <tr>
                                    <td class="b-green"><strong>Africa</strong></td>
                                    <td >South Africa, Uganda, Nigeria, Ghana, Kenya, Mauritius, Botswana, Egypt, Ethiopia, Libya, Sudan, Congo, Gambia, Ivory Coast</td>
                                </tr>
                                <tr>
                                    <td class="b-green" ><strong >North &amp;  Latin  America</strong></td>
                                    <td >USA, Canada, Panama, Trinidad and Tobago, Costa Rica, Puerto Rico, Dominican Republic, Argentina, Guatemala, Guyana, Peru, Bolivia, Venezuela , Brazil, Bahamas, Ecuador</td>
                                </tr>
                                <tr>
                                    <td class="b-green" ><strong>Europe</strong></td>
                                    <td >Austria , Azerbaijan, Belarus,  Belgium, Cyprus, Czech Republic, Denmark, France, Georgia, Germany, Hungary, Ireland, Iceland, Netherlands, Norway, Poland, Spain, Sweden, Switzerland, Ukraine, United Kingdom (UK) , Latvia</td>
                                </tr>
                                <tr>
                                    <td class="b-green" ><strong>OCEANIA</strong></td>
                                    <td >Australia, New Zealand, Fiji</td>
                                </tr>
                            </tbody>
                     </table>
                </div>
                    <div className="global-description2">
                        <p >Our mantra has always been global. Only the best quality, capability, infrastructure and pricing can survive in this market.
                        </p>

                        <h6 className='h6-h'>Our Partnering Policy</h6>
                        <p>We believe in working together towards success, with mutual trust, understanding our partner's requirements and above all satisfying them.
                        </p>

                        <h6>Partnerships</h6>
                        <p>Our products are available to local pharmaceutical distributors in most countries.We support our partners with manufacture and supply of pharmaceutical products according to their requirements and specifications. We provide the marketing support to our partners. Our business development team and Regulatory team are always at our customer's service.
                        </p>

                        <h6>Customer Specific Manufacture And Supply</h6>
                        <p>Our products are available under private label to our distributors and partners in most countries. In order to satisfy the diverse needs of our various customers located in different parts of the world we believe in developing products specific to the requirements of our customers.
                        </p>
                        
                        <h6>Co-marketing</h6>
                        <p>At Wellona Pharma, we help build "molecules into brands." We work with our Customers, strategically and programmatically, to accelerate, expand and extend the product life cycles of ethical drugs. We have developed considerable brand marketing experience in the emerging markets through our portfolio of branded generics. We focus on new generations of drugs thereby ascending the value chain in the marketing and ultimately increase revenues from the sales of our products.
                        </p>

                        <h6>Regulatory Support/ Services</h6>
                        <p>Our Regulatory team consists of elite, highly qualified personnel engaged in providing data required to assure the high Quality, efficacy and safety of our Products. We can provide, clinical Trials, FDA Certificates and BE Studies for registration of our products as per guidelines of most health authorities in most countries.
                        </p>

                        <h6>Logistics</h6>
                        <p>We understand that distribution of pharmaceutical products must be undertaken with a great deal of care and attention. Raw materials awaiting processing and finished products awaiting dispatch are stored in modern, fully climate-controlled high-bay storage areas. We are able to meet the delivery needs of its customers thanks to its modern data and order processing systems, its inspections of all goods entering and leaving the factory, and the latest transport logistics (road, sea or air). No matter what route product takes, or how long it takes to get there, its journey is carefully monitored until it reaches its destination.
                        </p>
                    </div>  
                    <h5 class="h6-tag" >In a nutshell, the factors that have made us successful in drug manufacturing for overseas markets are:</h5>
                   <div className="listing-item">
                       <ul>
                            <li>High quality products.</li>
                            <li>Flexible responsive service.</li>
                            <li>"Just In time" delivery approach.</li>
                            <li>Competitive pricing</li>
                            <li>Excellent compliance record.</li>
                            <li>Efficient technical transfers.</li>
                            <li>Modern GMP Certified facilities.</li>
                            <li>FDA approved site.</li>
                            <li>Strong Regulatory support.</li>
                            <li>Efficient inventory coverage.</li>
                        </ul>
                   </div>
        </div>
    </div>
    </>
  )
}

export default Global;