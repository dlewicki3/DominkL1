import React, { useEffect, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O2.css";
import Cos from './Pro.svg';

gsap.registerPlugin(ScrollTrigger);

const O2 = forwardRef((props, ref) => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".o2",
        start: "top 500px",
        end: "bottom 300px",
      }
    });

    tl.fromTo(".foto", { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, delay: 0.1 })
      .fromTo(".top2", { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, delay: 0.1 })
      .fromTo(".bottom2", { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.4, delay: 0.1 });
  }, []);

  return (
    <div className="o2" ref={ref}>
      <div className="k2">
        <div className="left2">
          <img className='foto' src={Cos} alt="Profile" />
        </div>
        <div className="right2">
          <div className="top2">ABOUT ME</div>
          <div className="bottom2">
            Witam, nazywam się Dominik Lewicki, specjalizuję się w tworzeniu stron internetowych i zarządzaniu mediami społecznościowymi. Sztuczna inteligencja jest kluczowym elementem mojej pracy.
          </div>
        </div>
      </div>
    </div>
  );
});

export default O2;
