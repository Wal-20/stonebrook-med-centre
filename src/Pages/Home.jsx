import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../assets/css/home.css'
import heroImage from '../assets/images/hero-image.png'
import aboutImage1 from '../assets/images/about_1.png'
import aboutImage2 from '../assets/images/about_2.png'
import aboutImage3 from '../assets/images/about_3.png'
import servicesImage1 from '../assets/images/service-img-1.png'
import servicesImage2 from '../assets/images/service-img-2.png'
import servicesImage3 from '../assets/images/service-img-3.png'
import servicesImage4 from '../assets/images/service-img-4.png'
import servicesImage5 from '../assets/images/service-img-5.png'
import servicesImage6 from '../assets/images/service-img-6.png'
import docImg from '../assets/images/doc-img.png'
import docImg2 from '../assets/images/img 2 1.png'
import docPlaceHolder from '../assets/images/doc-img-placeholder.png'

const Home = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div >
        <Navbar />
        <div className="hero-section">
            <div className="hero-content">
                <h1 style={{fontFamily: 'Oswald'}}>Trusted Family Medical Care at Stonebrook Medical Center</h1>
                <p >Family care and walk-in services. Convenient, compassionate, and reliable.</p>
                <button onClick={() => window.location.href = '/book-appointment'}>Book an Appointment</button>

            </div>
            <div className="hero-image">
                <div className="sticky-note" style={{background: '#B1D9F5', marginTop: '40%', borderRadius: '20px', padding: '10px'}}>
                    <h4>Pediatric Care</h4>
                    <p>Specialized healthcare for children, ensuring a healthy start.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1B529E"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                </div>
                <img src={heroImage} alt="Hero" />
                <div className="sticky-note" style={{background: '#B2EBE0', marginBottom: '40%', borderRadius: '20px', padding: '10px'}}>
                    <h4>Pediatric Care</h4>
                    <p>Specialized healthcare for children, ensuring a healthy start.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1B529E"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                </div>
            </div>
        </div>
        <div id="about-section">
          <div id="about-images">
            <div className="about-images-container">
              <div className="about-images-column">
                <img src={aboutImage1} alt="Image 1" className="about-image" />
                <img src={aboutImage2} alt="Image 2" className="about-image" />
              </div>
              <div className="about-images-column about-images-column-center">
                <img src={aboutImage3} alt="Image 3" className="about-image about-image-large" />
              </div>
            </div>
          </div>
          <div id="about-content">
            <p style={{color: '#04B794'}}>ABOUT US</p>
            <h1 style={{fontFamily: 'Oswald', marginTop: "0"}}>Welcome To Stonebrook Medical Center</h1>
            <p style={{color: '#606060', lineHeight: '35px'}}>Stonebrook Medical Center is dedicated to delivering exceptional healthcare for families and individuals. Our experienced team provides personalized family care and convenient walk-in services, ensuring quality medical support when you need it most.</p>
            <div className="about-bulletpoints">
              {[
                ['Caring Medical Team', 'Comprehensive Family Care', 'Walk-In Clinic Convenience', 'Advanced Medical Facilities'],
                ['Personalized Treatment Plans', 'Accessible Location', 'Patient-Centered Approach', 'Flexible Appointment Scheduling']
              ].map((column, columnIndex) => (
                <div key={columnIndex} className="bulletpoint-column">
                  {column.map((point, pointIndex) => (
                    <div key={pointIndex} className="bulletpoint">
                      <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                      </svg>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <button onClick={() => window.location.href = '/book-appointment'}>Book an Appointment</button>
          </div>
        
        </div>
        <div id="services-section">
          <p style={{color: '#04B794', textAlign: 'center', marginBottom: "0"}}>WHAT WE PROVIDE</p>
          <h2 style={{fontFamily: 'Oswald', textAlign: 'center', marginBottom: '40px', marginTop: "0", fontSize: "48px"}}>Comprehensive Healthcare for Every Need</h2>
          <div className="services-grid">
            <div className="services-row">
              {[
                { image: servicesImage1, title: 'Family Medicine', description: 'Comprehensive care for all ages, from newborns to seniors.' },
                { image: servicesImage2, title: 'Chronic Disease Management', description: 'Expert support for managing conditions like diabetes, hypertension, and asthma.' },
                { image: servicesImage3, title: 'Pediatric Care', description: 'Specialized care for infants, children, and adolescents.' },
              ].map((service, index) => (
                <div key={index} className="service-card">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
            <div className="services-row">
              {[
                { image: servicesImage4, title: 'Women\'s Health', description: 'Routine exams, prenatal care, and other women\'s health services.' },
                { image: servicesImage5, title: 'Walk-In Clinic', description: 'Immediate care for minor injuries, illnesses, and urgent health needs.' },
                { image: servicesImage6, title: 'Minor Procedures', description: 'In-house procedures like stitches, wound care, and more.' }
              ].map((service, index) => (
                <div key={index} className="service-card">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <h2>{service.title}</h2>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="team-section">
          <p style={{color: '#04B794', textAlign: 'center', marginBottom: "0"}}>OUR TEAM</p>
          <h2 style={{fontFamily: 'Oswald', textAlign: 'center', marginBottom: '40px', marginTop: "0", fontSize: "48px"}}>Meet Our Expert Medical Team</h2>
          <div className="doctors-carousel" ref={carouselRef}>
            {[
              { image: docImg, name: 'Doctor Name', specialty: 'Specialty/Major' },
              { image: docPlaceHolder, name: 'Doctor Name', specialty: 'Specialty/Major' },
              { image: docPlaceHolder, name: 'Doctor Name', specialty: 'Specialty/Major' },
              { image: docPlaceHolder, name: 'Doctor Name', specialty: 'Specialty/Major' },
              { image: docPlaceHolder, name: 'Doctor Name', specialty: 'Specialty/Major' },
              { image: docPlaceHolder, name: 'Doctor Name', specialty: 'Specialty/Major' },
            ].map((doctor, index) => (
              <div key={index} className="doctor-card">
                <img src={doctor.image} alt={doctor.name} className="doctor-image" />
                <h3>{doctor.name}</h3>
                <p>{doctor.specialty}</p>
              </div>
            ))}
          </div>
        </div>
        <div id="get-in-touch">
          <img src={docImg2} id='get-in-touch-image' alt="Doctor" />
          <div id='get-in-touch-content'>
            <p>GET IN TOUCH</p>
            <h1>Ready to Take the Next Step in Your Health Journey?</h1>
            <span>
              <button onClick={() => window.location.href = '/book-appointment'}>Book Appointment</button>
              <button onClick={() => window.location.href = '/register'}>New Patient Form</button>
            </span>
          </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home