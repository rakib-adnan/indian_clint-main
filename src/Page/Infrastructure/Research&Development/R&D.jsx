import React from 'react';
import Titel from '../../../Components/Titel/Titel';
import '../../../Components/Titel/Titel.scss';
import '../Manufacture/Manufacturing.scss';
import './R&D.scss'

const ResearchDevelopment = () => {
  return (
    <>
    {/* Manufacturing Section Start */}
     <section className='manufacturing-section'>
        <div className="container">
            <div className="manufacturing-title">
                <Titel first="Research" secound=" & Development"/>
            </div>

            <div className="manufacturing-description rd-description">
                <p>
                    This department is the backbone and also the life force of the company. It is here that our vision and mission comes alive. Our R & D division focuses on development of new products and drug across a wide range of therapies including Tablets, Capsules, Injection, Cream, Dry Syrups. Research and Development team is headed by experienced scientists, chemists and technicians with proficient knowledge in pharmaceutical industry.
                </p>
            </div>

            <div className="manufacturing-facility">
                <h6>Our Dosage Development Laboratory is equipped with following capabilities:</h6>
                <ul>
                    <li>Development of novel, modified release Solid Oral dosage forms</li>
                    <li>Cost effective Test masking Technology</li>
                    <li>Development of drugs with poor solubility to enhance solubility and bioavailability</li>
                    <li>Design and development of pharmaceutical products of International standards.</li>
                    <li>Pre formulation studies.</li>
                    <li>Lab / pilot scale development and stability studies.</li>
                    <li>Scale up for process optimization / validation.</li>
                    <li>Technology transfer of new products.</li>
                    <li>Technical assistance for manufacturing.</li>
                    <li>Data management (for transfer to customer / Regulatory Affairs).</li>
                    <li>Prototype Equipments as that of manufacturing facilities.</li>
                </ul>
            </div>
        </div>
     </section>
     {/* Manufacturing Section End */}
    
    </>
  )
}

export default ResearchDevelopment;