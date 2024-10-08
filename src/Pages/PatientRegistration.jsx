import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ShortHero from '../Components/ShortHero'
import '../assets/css/registration.css'

const PatientRegistration = () => {
  return (
    <div>
      <Navbar/>
      <ShortHero header={"New Patient Registration"} subtext={"To make your visit as smooth as possible, please complete our (Patient Screening Forms). This helps us provide you with the best care during your appointment."}/>
        <div className="form-header">
            <h1 style={{fontFamily: "Oswald"}}>Complete Your Details Below</h1>
            <p>This information helps us prepare for your visit and offer you the best possible care.</p>
        </div>
        <div className="registration-form">
            <form>
                <h2 style={{fontFamily: "Oswald"}}>Section 1: Demographic</h2>

                <div className="form-row">
                  <div>
                    <label htmlFor="f-name">First Name</label>
                    <input type="text" id="f-name" name="f-name" placeholder="Patient's first name" required />
                  </div>
                  <div>
                    <label htmlFor="l-name">Last Name</label>
                    <input type="text" id="l-name" name="l-name" placeholder="Patient's last name" required />
                  </div>
                </div>

                <label htmlFor="date">Date Of Birth</label>
                <input type="date" id="date" name="date" placeholder='mm/dd/yyyy' required />

                <div className="radio-options">
                <label style={{ margin: "10px 0", alignSelf: "center"}}>Gender: </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" name="gender" value="male" style={{ marginRight: '5px' }} />
                    Male
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" name="gender" value="female" style={{ marginRight: '5px' }}/>
                    Female
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" name="gender" value="other" style={{ marginRight: '5px' }} />
                    Other
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" name="gender" value="prefer-not-to-say" style={{ marginRight: '5px' }} />
                    Prefer not to say
                  </label>
                </div>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder='Enter your home address' required />
                
                <label htmlFor="city">City</label>
                <input type="text" id="city" name="city" placeholder='Enter your city' required />

                <label htmlFor="postal-code">Postal Code</label>
                <input type="number" id="postal-code" name="postal-code" placeholder='Enter your postal code' required />
                
                <label htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" name="phone-number" placeholder='Enter your phone number' required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />

                <label htmlFor="health-card-number">Health Card Number</label>
                <input type="number" id="health-card-number" name="health-card-number" placeholder="Enter your health card number" required />

                <label htmlFor="version-code">Version Code</label>
                <input type="number" id="version-code" name="version-code" placeholder="Enter your version code" required />

                <label htmlFor="emergency-contact-1">Emergency Contact 1</label>
                <input type="tel" id="emergency-contact-1" name="emergency-contact-1" placeholder='Enter phone number'/>

                <label htmlFor="emergency-contact-2">Emergency Contact 2</label>
                <input type="tel" id="emergency-contact-2" name="emergency-contact-2" placeholder='Enter phone number'/>

                <label htmlFor="emergency-contact-relationship">Relationship to Emergency Contact</label>
                <input type="text" id="emergency-contact-relationship" name="emergency-contact-relationship" />

                <h2 style={{fontFamily: "Oswald"}}>Medical History</h2>
                
                <svg style={{ display: 'none' }}>
                  <symbol id="tick-mask" viewBox="0 -960 960 960">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </symbol>
                </svg>

                <label htmlFor="medical-conditions">Do you have any existing medical conditions?</label>
                <div className='radio-options'>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" value="Yes" style={{ marginRight: '5px' }} />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" value="No" style={{ marginRight: '5px' }} />
                    No
                  </label>
                </div>
                <textarea id="medical-conditions" name="medical-conditions" rows="10" placeholder='If yes, please list the conditions and any relevant information.'></textarea>

                <label htmlFor="medications">Are you currently taking any medications?</label>
                <div className='radio-options'>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" value="Yes" style={{ marginRight: '5px' }} />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" value="No" style={{ marginRight: '5px' }} />
                    No
                  </label>
                </div>
                <textarea id="medical-conditions" name="medical-conditions" rows="10" placeholder='If yes, please list.'></textarea>

                <label htmlFor="medical-conditions">Do you have any existing medical conditions?</label>
                <div className='radio-options'>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" value="Yes" style={{ marginRight: '5px' }} />
                    Yes
                  </label>
                  <label style={{ display: 'flex', alignItems: 'center' }}>
                    <input type="radio" value="No" style={{ marginRight: '5px' }} />
                    No
                  </label>
                </div>
                <textarea id="medical-conditions" name="medical-conditions" rows="10" placeholder='If yes, please list the conditions and any relevant information.'></textarea>
                <p style={{color: '#757575'}}>By submitting this form, I confirm that the information provided is accurate and complete to the best of my knowledge. </p>

                <button className="book-appointment-button" style={{backgroundColor: "#292929", marginTop: '40px'}} type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default PatientRegistration