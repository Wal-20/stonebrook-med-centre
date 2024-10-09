import React from 'react'
import '../assets/css/footer.css'
import bg from '../assets/images/group.png'
import fbLogo from '../assets/images/uil_facebook.png'
import igLogo from '../assets/images/ri_instagram-fill.png'
import twitterLogo from '../assets/images/Vector.png'
import linkedInLogo from '../assets/images/akar-icons_linkedin-box-fill.png'

const Footer = () => {
  return (
    <div id='footer-container'>
      <div id='footer-content'>
        
        <div id="footer-links">
            <h2 className="footer-section-title">Quick Links</h2>
            <a className='footer-subtext' href="/">Home</a>
            <a className='footer-subtext' href="/services">Services</a>
            <a className='footer-subtext' href="/register">New Patient Form</a>
            <a className='footer-subtext'>Contact Us</a>
        </div>
        <div id="footer-services">
            <h2 className="footer-section-title">Services</h2>
            <a className='footer-subtext'>Family Medicine</a>
            <a className='footer-subtext'>Preventative Care</a>
            <a className='footer-subtext'>Pediatric Care</a>
            <a className='footer-subtext'>Women's Health</a>
            <a className='footer-subtext'>Walk-In Clinic</a>
            <a className='footer-subtext'>Minor Procedures</a>
        </div>
        <div>
          <h2 className="footer-section-title">Business Hours</h2>
          <p className="footer-subtext">Mon-Fri: 8:00 AM - 6:00 PM</p>
          <p className="footer-subtext">Sat: 9:00 AM - 3:00 PM</p>
          <p className="footer-subtext">Sun: Closed</p>
        </div>
        <div>
          <h2 className="footer-section-title">Contact</h2>
          <p className="footer-subtext">123 Main St, City, State</p>
          <p className="footer-subtext">(123) 456-7890</p>
          <p className="footer-subtext">info@stonebrookmedical.com</p>
        </div>
      </div>
      <div id="footer-bottom">
        <div id="footer-socials">
          <img src={fbLogo} alt="Facebook" />
          <img src={twitterLogo} alt="Twitter" />
          <img src={igLogo} alt="Instagram" />
          <img src={linkedInLogo} alt="LinkedIn" />
        </div>
        <p id="footer-copyright">© 2024 Stonebrook Medical Center. All Rights Reserved.</p>
      </div>
    </div>

  )
}

export default Footer