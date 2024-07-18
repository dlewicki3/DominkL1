import React, { forwardRef } from 'react';
import "./O12.css";

const O12 = forwardRef((props, ref) => {
  return (
    <div className="o12" ref={ref}>
      <div className="k12">
        <div className="left12">
          <div className="top12">
            <p className='big-txt122'>Bądźmy
              <br></br>
              w kontakcie</p>
          </div>
          <div className="bottom12">
            <div className="left122">
              <p className='imienazwisko-txt2'>Dominik Lewicki</p>
              <p className='imienazwisko-txt3'>Ready to work</p>
            </div>

            <div className="right122">
              <p className='phone-email-txt'>Phone</p>
              <br></br>
              <p className='number'>518 121 845</p>
              <br></br>
              <p className='phone-email-txt'>Email</p>
              <br></br>
              <p className='mail'>dominik_03-6@wp.pl</p>
            </div>
            
          </div>
        </div>
        <div className="right12">
          <p className='imienazwisko-txt'>Dominik Lewicki</p>
          <p className='small-txt12'>Social Media Specialist | Front-End Developer</p>
        </div>
      </div>
    </div>
  );
});

export default O12;