import React from 'react'
import Navbar from '../Components/Navbar'
import docImg2 from '../assets/images/img 2 1.png'
import ShortHero from '../Components/ShortHero'
import Footer from '../Components/Footer'
import '../assets/css/serviceListPage.css'
import servicesImage1 from '../assets/images/service-img-1.png'
import servicesImage2 from '../assets/images/service-img-2.png'
import servicesImage3 from '../assets/images/service-img-3.png'
import servicesImage4 from '../assets/images/service-img-4.png'
import servicesImage5 from '../assets/images/service-img-5.png'
import servicesImage6 from '../assets/images/service-img-6.png'
import servicesImage7 from '../assets/images/service-img-7.png'
import servicesImage8 from '../assets/images/service-img-8.png'
import servicesImage9 from '../assets/images/service-img-9.png'
import servicesImage10 from '../assets/images/service-img-10.png'
import servicesImage11 from '../assets/images/service-img-11.png'
import servicesImage12 from '../assets/images/service-img-12.png'
import servicesImage13 from '../assets/images/service-img-13.png'
import servicesImage14 from '../assets/images/service-img-14.png'
import servicesImage15 from '../assets/images/service-img-15.png'
import servicesImage16 from '../assets/images/service-img-16.png'
import servicesImage17 from '../assets/images/service-img-17.png'
import servicesImage18 from '../assets/images/service-img-18.png'
import servicesImage19 from '../assets/images/service-img-19.png'
import docImg from '../assets/images/doc-img.png'
import docPlaceHolder from '../assets/images/doc-img-placeholder.png'



const Services = () => {
  return (
    <div id='service-page-container'>
        <Navbar/>
        <ShortHero header={"Our Services"} subtext={"At Stonebrook Medical Centre, we provide a comprehensive range of healthcare services to meet your needs"}/>
        <h1 style={{fontFamily: "Oswald"}}>Explore Our Specialized Services</h1>
        <div className='service-card-container'>
        {[
                { image: servicesImage1, title: 'Walk-In Clinic'},
                { image: servicesImage2, title: 'Smoking Cessation'},
                { image: servicesImage3, title: 'PAP Tests'},
                { image: servicesImage4, title: 'Specialist Referrals' },
                { image: servicesImage5, title: 'Prenatal Care' },
                { image: servicesImage6, title: 'Hypertension Management'}, 
                { image: servicesImage7, title: 'Heart Failure Management'}, 
                { image: servicesImage8, title: 'Childhood And Adult Vaccinations'}, 
                { image: servicesImage9, title: 'Wellness Visits and Annual Check-Ups'}, 
                { image: servicesImage10, title: 'Cholesterol Disorder & Fatty Liver Disease Treatment'},
                { image: servicesImage11, title: 'Diabetes Management'},
                { image: servicesImage12, title: 'STI Testing and Treatment'},
                { image: servicesImage13, title: 'Well Baby Check/Vaccinations'},
                { image: servicesImage14, title: 'Travel Vaccination'},
                { image: servicesImage15, title: 'OHIP and Non-OHIP Patients Welcome'},
                { image: servicesImage16, title: 'MTO Drivers Physical Exams'},
                { image: servicesImage17, title: 'Medical Notes & Forms'},
                { image: servicesImage18, title: 'TB Skin Test & Reading'},
                { image: servicesImage19, title: 'Third-Party Physical Exams'},
              ].map((service, index) => (
                <div key={index} className="service-card">
                  <img src={service.image} alt={service.title} className="service-image" />
                  <h2>{service.title}</h2>
                </div>
              ))}
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
        <Footer/>
    </div>
  )
}

export default Services