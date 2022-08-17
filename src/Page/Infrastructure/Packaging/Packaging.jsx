import React from 'react';
import Titel from '../../../Components/Titel/Titel';
import '../../../Components/Titel/Titel.scss';
import '../Manufacture/Manufacturing';
import './Packaging.scss'

const Packaging = () => {
  return (
    <>
    {/* Manufacturing Section Start */}
     <section className='manufacturing-section'>
        <div className="container">
            <div className="manufacturing-title">
                <Titel secound="Packaging"/>
            </div>

            <div className="manufacturing-description">
                <p>Packaging is a critical element in any pharmaceutical product. The packaging of products has to take into account multiple variables from transit to weather & time. At Wellona pharma, our approach to quality covers every aspect of packaging ensuring that our products maintain their safety, reliability, stability & integrity long after they have left our production line. Our use of packaging materials and application of processes conform to all relevant international standards, with regard to a host of critical parameters, such as</p>
            </div>

            <div className="manufacturing-facility">
                <ul>
                    <li>Medical grade, non-toxic materials</li>
                    <li>Compliance with all regulatory norms.</li>
                    <li>Excellent oxygen and moisture barrier properties</li>
                    <li>Consistency in High Quality</li>
                    <li>Printed shipper available on request</li>
                </ul>

                <p>Our in-house design team ensures that every pack that we create bears the hallmarks of contemporary, classy styling. We take care of the twin aspects of aesthetics & clarity that are vital to pharma packaging. We also pay significant attention to storage requirements with separate reserved areas for various packaging materials such as aluminum and PVC foils and ensure that they are stored always at optimum temperatures.</p>
            </div>
        </div>
     </section>
     {/* Manufacturing Section End */}
    
    </>
  )
}

export default Packaging;