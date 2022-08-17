import React from 'react';
import Titel from '../../../Components/Titel/Titel';
import '../../../Components/Titel/Titel.scss';
import './Manufacturing.scss';

const Manufacturing = () => {
  return (
    <>
    {/* Manufacturing Section Start */}
     <section className='manufacturing-section'>
        <div className="container">
            <div className="manufacturing-title">
                <Titel secound="Manufacturing"/>
            </div>

            <div className="manufacturing-description">
                <h6>World class manufacturing facilities:</h6>
                <p>Our manufacturing facility meet stringent GMP norms, laid down in the "Revised Schedule M" by the Drug Controller (General) India, Ministry of Health, and Government of India. With an unwavering commitment to quality, Wellona pharma’s Quality Policy covers the entire gamut of our operations, from using the best raw materials to strict control at every stage of manufacturing and packaging.</p>
            </div>

            <div className="manufacturing-facility">
                <h6>Highlights of manufacturing facility:</h6>
                <ul>
                    <li>No wood or asbestos component.</li>
                    <li>Each zone has separate AHUs (Air Handling Units), dehumidification unit and dust extraction systems.</li>
                    <li>Segregation of every critical processing activity in each zone, to avoid cross-contamination.</li>
                    <li>Respective zones, areas and even uniforms marked with specific colors to ensure total segregation.</li>
                    <li>Air environment conditioned in each area with respect to temperature, humidity, filtration, particle counts, etc.</li>
                    <li>Duo Pass Reverse Osmosis (RO) water system/ de-mineralization plant.</li>
                    <li>Zero-discharge Effluent Treatment Plant.</li>
                    <li>Air-conditioned stores for raw material, packing material and finished good.</li>
                    <li>Isolated and dedicated production facilities for β-Lactum and Cephalosporin dosage forms.</li>
                    <li>The complex also houses its own R &D facility for in house product development.</li>
                    <li>Dispensing of materials under an SS reverse laminar flow.</li>
                    <li>Individual compression and coating cabins with separate air handling units to avoid cross contamination.</li>
                    <li>Alternative power generation system for uninterrupted production.</li>
                    <li>A unidirectional flow of men and materials to promote optimum productivity</li>
                    <li>Accessibility of all utilities and maintenance areas from outside, for additional ease of operation.</li>
                    <li>Ample segregated storage for raw materials and packaging materials, with a quarantine facility.</li>
                    <li>Separate air handling units for every production departments, in addition to air conditioning with 3 micron filtration to ensure absolute product purity.</li>
                    <li>We house huge capacities for manufacturing round the clock (* Spare capacity available for all sections).</li>
                </ul>

                <p>We work to the most complex of customer requirements & provide some of the most competitive rates in the industry. We also offer our products on a third party basis and provide private labelling arrangements for export. We manufacture a broad range of branded pharmaceutical formulations in diverse forms. We look forward to collaborating with importers, distributors and agents in order to expand our market base. </p>
            </div>
        </div>
     </section>
     {/* Manufacturing Section End */}
    
    </>
  )
}

export default Manufacturing;