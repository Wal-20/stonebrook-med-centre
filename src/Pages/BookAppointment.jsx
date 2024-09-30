import React, { useRef } from 'react'
import '../assets/css/appointment.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ShortHero from '../Components/ShortHero'
import appointmentImage from '../assets/images/appointment1.png'
import appointmentImage2 from '../assets/images/appointment2.png'
import appointmentImage3 from '../assets/images/appointment3.png'
import docImg from '../assets/images/doc-img.png'
import docPlaceHolder from '../assets/images/doc-img-placeholder.png'


const BookAppointment = () => {

  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <div>
        <Navbar/>
       <ShortHero header={"Book Your Appointment"} subtext={"Schedule a convenient time for your visit with our experienced medical team."}/>
        <div className="form-header">
            <h1 style={{fontFamily: "Oswald"}}>Enter Your Details</h1>
            <p>Provide basic information so we can confirm your appointment.</p>
        </div>
        <div className="registration-form">
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="enter patient's full name" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="enter your email" required />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder='enter your phone number ' required />

                <label htmlFor="healthConcern">Tell Us About Your Health Concern</label>
                <textarea id="healthConcern" name="healthConcern" rows="10" placeholder='message'required></textarea>

                <div className="date-time-row">
                    <div>
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" name="date" placeholder='mm/dd/yyyy' required />
                    </div>
                    <div>
                        <label htmlFor="time">Time</label>
                        <input type="time" id="time" name="time" placeholder='h/m' required />
                    </div>
                </div>
                <button className="book-appointment-button" style={{backgroundColor: "#292929"}} type="submit">Confirm Appointment</button>
            </form>
            <div className="appointment-images">
                <img src={appointmentImage} alt="Appointment 1" />
                <img src={appointmentImage2} alt="Appointment 2" />
                <img src={appointmentImage3} alt="Appointment 3" />
            </div>
        </div>
        <div className="team-section" style={{background: "#E7F1FF"}}>
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
        <Footer/>
    </div>
  )
}

export default BookAppointment

