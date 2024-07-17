import React from 'react';
import "./Navbar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Navbar = ({ o1Ref, o12Ref, o2Ref, o4Ref, o10Ref }) => {
  const handleLogoClick = () => {
    o1Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleButtonClick = () => {
    o12Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    o2Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStrategyClick = () => {
    o4Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCollaborationClick = () => {
    o10Ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="nav">
      <div className="navbar">
        <div className="logo" onClick={handleLogoClick}>Dominik Lewicki</div>
        <div className="links">
          <div className="link" onClick={handleAboutClick}>O mnie</div>
          <div className="link" onClick={handleStrategyClick}>Strategia</div>
          <div className="link" onClick={handleCollaborationClick}>Współpraca</div>
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
