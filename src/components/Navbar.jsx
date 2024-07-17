import React from 'react';
import "./Navbar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = ({ o12Ref }) => {
  const handleButtonClick = () => {
    o12Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo">Dominik Lewicki</div>
        <div className="links">
          <div className="link">O mnie</div>
          <div className="link">Strategia</div>
          <div className="link">Współpraca</div>
          <div className="link"></div>
        </div>
        <button className="button1" onClick={handleButtonClick}>
          Project request <MdOutlineKeyboardArrowRight size={16}/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
