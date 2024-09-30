import React, { useState, useEffect, useRef } from 'react'
import '../assets/css/nav.css'
import logoImage from '../assets/images/main-logo.png'

const Navbar = ({ transparent = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showServiceOptions, setShowServiceOptions] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('in');
  const serviceOptionsRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleClickOutside = (event) => {
      if (serviceOptionsRef.current && !serviceOptionsRef.current.contains(event.target)) {
        setShowServiceOptions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('mousedown', handleClickOutside);
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

  const toggleServiceOptions = () => {
    if (showServiceOptions) {
      setAnimationDirection('out');
      setTimeout(() => {
        setShowServiceOptions(false);
        setAnimationDirection('in');
      }, 300); // Match this with your animation duration
    } else {
      setShowServiceOptions(true);
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
        {isMobile ? (
          <>
            <div className='navbar-link' onClick={toggleServiceOptions}>
              Services
            </div>
            {showServiceOptions && (
              <div ref={serviceOptionsRef} className={`mobile-service-options slide-${animationDirection}`}>
                <div className='navbar-link back-button' onClick={toggleServiceOptions}>
                <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z"/></svg>
                  Back
                  </div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/house-renovation")}>House Renovation Services</div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/closets-and-cabinets")}>Closets and Cabinets Services</div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/gates-and-doors")}>Gates and Doors Services</div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/fireplace")}>Fireplace Services</div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/kitchens")}>Kitchens Services</div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/stairs-and-rails")}>Stairs And Rails</div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/decks-and-fences")}>Decks And Fences</div>
                <div className='navbar-link' onClick={() => handleLinkClick("/services/bathrooms")}>Bathroom Services</div>
              </div>
            )}
          </>
        ) : (
          <div className="navbar-link services-dropdown" style={{color: transparent && !isMobile ? 'white' : 'black'}}>
            Services

            <div className="dropdown-content">
              <div onClick={() => handleLinkClick("/services/house-renovation")}>House Renovation Services</div>
              <div onClick={() => handleLinkClick("/services/closets-and-cabinets")}>Closets and Cabinets Services</div>
              <div onClick={() => handleLinkClick("/services/gates-and-doors")}>Gates and Doors Services</div>
              <div onClick={() => handleLinkClick("/services/fireplace")}>Fireplace Services</div>
              <div onClick={() => handleLinkClick("/services/kitchens")}>Kitchens Services</div>
              <div onClick={() => handleLinkClick("/services/stairs-and-rails")}>Stairs And Rails</div>
              <div onClick={() => handleLinkClick("/services/decks-and-fences")}>Decks And Fences</div>
              <div onClick={() => handleLinkClick("/services/bathrooms")}>Bathroom Services</div>
            </div>
          </div>
        )}
        <div className='navbar-link' style={{color: transparent && !isMobile ? 'white' : 'black'}} onClick={() => handleLinkClick("/register")}>New Patient Form</div>

        <div className='navbar-link' style={{color: transparent && !isMobile ? 'white' : 'black'}} onClick={() => handleLinkClick("/contact")}>Contact Us</div>
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