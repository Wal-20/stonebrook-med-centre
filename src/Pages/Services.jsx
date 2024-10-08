import React from 'react'
import Navbar from '../Components/Navbar'
import docImg from '../assets/images/img 2 1.png'
import ShortHero from '../Components/ShortHero'
import Footer from '../Components/Footer'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <ShortHero header={"Our Services"} subtext={"At Stonebrook Medical Centre, we provide a comprehensive range of healthcare services to meet your needs"}/>
        <div id="get-in-touch">
          <img src={docImg} id='get-in-touch-image' alt="Doctor" />
          <div id='get-in-touch-content'>
            <p>GET IN TOUCH</p>
            <h1>Ready to Take the Next Step in Your Health Journey?</h1>
            <span>
              <button onClick={() => window.location.href = '/book-appointment'}>Book Appointment</button>
              <button onClick={() => window.location.href = '/register'}>New Patient Form</button>
            </span>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Services