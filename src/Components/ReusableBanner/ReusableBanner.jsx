import React from 'react';
import './ReusableBanner.scss';

const ReusableBanner = ({bannerHeding , bannerText1, bannerText2}) => {

  return (

    <div className="global-content">           
        <h6 class="section-sub-title ">{bannerHeding}</h6>
        <h3 class="heading" > <span className='bannerText1'>{bannerText1}</span><span className='bannerText2' >{bannerText2}</span></h3>
    </div>
  )
}

export default ReusableBanner;