import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import '../assets/css/home.css'
import heroImage from '../assets/images/hero-image.png'
import aboutImage1 from '../assets/images/about_1.png'
import aboutImage2 from '../assets/images/about_2.png'
import aboutImage3 from '../assets/images/about_3.png'
import serviceDesc1 from '../assets/images/service-desc-1.png'
import serviceDesc2 from '../assets/images/service-desc-2.png'
import serviceDesc3 from '../assets/images/service-desc-3.png'
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

  return (
    <div >
        <Navbar />
        <div className="hero-section">
            <div className="hero-content">
                <h1 style={{fontFamily: 'Oswald'}}>Trusted Family Medical Care at Stonebrook Medical Center</h1>
                <p>Family care and walk-in services. Convenient, compassionate, and reliable.</p>
                <button onClick={() => window.location.href = '/book-appointment'}>Book an Appointment</button>
                <h2 style={{fontFamily: 'Oswald'}}>Coming Soon: January 2025</h2>

            </div>
            <div className="hero-image">
                <div className="sticky-note" style={{background: '#B1D9F5', borderRadius: '20px', padding: '10px'}}>
                    <h4>Family Practice</h4>
                    <p>Comprehensive care for all ages, from kids to seniors.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#1B529E"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
                </div>
                <img src={heroImage} alt="Hero" />
                <div className="sticky-note" style={{background: '#B2EBE0', borderRadius: '20px', padding: '10px'}}>
                    <h4>Walk-In Clinic</h4>
                    <p>No appointment needed. Immediate care for urgent needs.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="#04B794"><path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z"/></svg>
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
                <div key={columnIndex} className="bulletpoint-column">home
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
        <div id="service-description">
          <div className="sticky-note" style={{background: '#04B794', borderRadius: '20px'}}>
              <span>
                <img src={serviceDesc1} alt="Service Description 1" />
                <h3 style={{fontFamily: 'Oswald', fontWeight: '400'}}>New Physicians, New Approach</h3>
              </span>
              <p>Our experienced team of healthcare professionals is here to support your health and wellness needs. Whether you're seeking a family doctor for ongoing care or need a specialist referral, we're here to help.</p>
          </div>
          <div className="sticky-note" style={{background: '#1B529E', borderRadius: '20px'}}>
              <span>
              <img src={serviceDesc2} alt="Service Description 2" />
              <h3 style={{fontFamily: 'Oswald', fontWeight: '400'}}>Accepting New Patients</h3>
              </span>
              <p>We are currently accepting new patients! Our friendly staff is ready to assist you with the registration process. Visit us, check our hours, and get started on your path to better health.</p>
          </div>
          <div className="sticky-note" style={{background: '#04B794', borderRadius: '20px'}}>
              <span>
                <img src={serviceDesc3} alt="Service Description 3" />
                <h3 style={{fontFamily: 'Oswald', fontWeight: '400'}}>Hours of Operation</h3>
              </span>
              <span style={{display: 'flex', flexDirection: 'column', gap: '1px', alignItems: 'flex-start'}}>
                <p style={{margin: '0'}}>Monday to Friday: 9:00 AM - 6:00 PM</p>
                <p style={{margin: '0'}}>Saturday: 10:00 AM - 2:00 PM</p>
                <p style={{margin: '0'}}>Sunday: Closed</p>
              </span>
          </div>
        </div>
        <div id="services-section">
          <p style={{color: '#04B794', textAlign: 'center', marginBottom: "0"}}>WHAT WE PROVIDE</p>
          <h2 style={{fontFamily: 'Oswald', textAlign: 'center', marginBottom: '40px', marginTop: "0", fontSize: "48px"}}>Comprehensive Healthcare for Every Need</h2>
          <div className='service-card-container'>
        {[
                { image: servicesImage1, title: 'Walk-In Clinic'},
                { image: servicesImage2, title: 'Smoking Cessation'},
                { image: servicesImage3, title: 'PAP Tests'},
                { image: servicesImage4, title: 'Specialist Referrals' },
                { image: servicesImage5, title: 'Prenatal Care' },
                { image: servicesImage6, title: 'Hypertension Management'}, 
              ].map((service, index) => (
                <div key={index} className="service-card">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <h2>{service.title}</h2>
                </div>
              ))}
        </div>
          <div className="book-appointment-button-container">
            <button className="book-appointment-button" onClick={() => window.location.href = '/services'}>Explore All Services</button>
          </div>
        </div>
        <div className="team-section">
          <p style={{color: '#04B794', textAlign: 'center', marginBottom: "0"}}>OUR TEAM</p>
          <h2 style={{fontFamily: 'Oswald', textAlign: 'center', marginBottom: '40px', marginTop: "0", fontSize: "48px"}}>Meet Our Expert Medical Team</h2>
          <div className="doctors-carousel">
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
