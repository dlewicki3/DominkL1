import React, { useEffect } from 'react';
import './O13.css';
import Ja1 from './Ja1.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function O13() {
  useEffect(() => {
    gsap.fromTo(
      ".big-txt13",
      { opacity: 0,  x: -20 },
      {
        opacity: 1, y: 0, x: 0, duration: 0.6, ease: "power3.out",
        scrollTrigger: {
          trigger: ".big-txt13",
          start: "top 80%",
          end: "top 50%",
        }
      }
    );

    gsap.fromTo(
      ".btn-13",
      { opacity: 0,  x: -20 },
      {
        opacity: 1, y: 0, x: 0, duration: 0.6, ease: "power3.out", delay: 0.2,
        scrollTrigger: {
          trigger: ".btn-13",
          start: "top 80%",
          end: "top 50%",
        }
      }
    );

    gsap.fromTo(
      ".ja-foto",
      { opacity: 0,  x: 20 },
      {
        opacity: 1, y: 0, x: 0, duration: 0.6, ease: "power3.out", delay: 0.4,
        scrollTrigger: {
          trigger: ".ja-foto",
          start: "top 80%",
          end: "top 50%",
        }
      }
    );
  }, []);

  const handleButtonClick = () => {
    console.log("Button clicked!");
    window.location.href = 'https://dlewicki3.github.io/Subpage/';
  };

  return (
    <div className="o13">
      <div className="k13">
        <div className="left13">
          <p className="big-txt13">Sprawdź moje dotychczasowe realizacje</p>
          <br />
          <br />
          <button className="btn-13" onClick={handleButtonClick}>
            Kliknij tutaj
          </button>
        </div>
        <div className="right13">
          <img className="ja-foto" src={Ja1} alt="Ja" />
        </div>
      </div>
    </div>
  );
}

export default O13;
