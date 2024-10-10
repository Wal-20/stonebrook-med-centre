import React, { useState, useEffect } from 'react'
import '../assets/css/nav.css'
import logoImage from '../assets/images/main-logo.png'

const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('in');

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);



    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleLinkClick = (url) => {
    window.location.href = url;
    if (isMobile) {
      setIsOpen(false);
      document.body.style.overflow = 'auto';
    }
  };


  return (
    <div id="navbar-main-container" className={transparent ? 'transparent' : ''}>
      <img src={logoImage} id="logo" alt="Logo" onClick={() => handleLinkClick("/")}></img>
      {isMobile && (
        <div 
          className={`burger-menu ${isOpen ? 'open' : ''}`} 
          style={{color: isOpen ? 'black' : (transparent ? 'white' : 'black')}} 
          onClick={toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      <div id="navbar-links" className={isOpen ? 'show' : ''}>
        <div className='navbar-link' style={{color: transparent && !isMobile ? 'white' : 'black'}} onClick={() => handleLinkClick("/")}>Home</div>
          <div className="navbar-link" onClick={() => handleLinkClick("/services")} style={{color: transparent && !isMobile ? 'white' : 'black'}}>
            Services
          </div>
        <div className='navbar-link' style={{color: transparent && !isMobile ? 'white' : 'black'}} onClick={() => handleLinkClick("/register")}>New Patient Form</div>

        <div className='navbar-link' style={{color: transparent && !isMobile ? 'white' : 'black'}}>Contact Us</div>
        <div className='navbar-link' style={{
          color: 'white',
          backgroundColor: '#292929',
          padding: '12px 20px',
          borderRadius: '50px'
        }} onClick={() => handleLinkClick("/book-appointment")}>Book Appointment</div>
      </div>
    </div>
  )
}


export default Navbar