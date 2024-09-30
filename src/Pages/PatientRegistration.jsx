import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ShortHero from '../Components/ShortHero'
import '../assets/css/registration.css'

const PatientRegistration = () => {
  return (
    <div>
      <Navbar/>
      <ShortHero/>
        <div className="form-header">
            <h1 style={{fontFamily: "Oswald"}}>Complete Your Details Below</h1>
            <p>This information helps us prepare for your visit and offer you the best possible care.</p>
        </div>
        <div className="registration-form">
            <form>
                <h2 style={{fontFamily: "Oswald"}}>Personal Information</h2>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="enter patient's full name" required />

                <div className="date-time-row">
                    <div>
                        <label htmlFor="date">Date Of Birth</label>
                        <input type="date" id="date" name="date" placeholder='mm/dd/yyyy' required />
                    </div>
                    <div>
                        <label htmlFor="gender">Gender</label>
                        <input type="text" id="gender" name="gender" required />
                    </div>
                </div>

                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" placeholder='enter your home address' required />

                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" placeholder='enter your phone number ' required />


                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="enter your email" required />


                <h2 style={{fontFamily: "Oswald"}}>Medical History</h2>
                
                <label htmlFor="email">Current Medication</label>
                <input type="curr-medication" id="curr-medication" name="curr-medication" placeholder="enter information" required />                

                <label htmlFor="email">Chronic Condition</label>
                <input type="chronic-condition" id="chronic-condition" name="chronic-condition" placeholder="enter information" required />

                <label htmlFor="email">Past Surgeries</label>
                <input type="past-surgeries" id="past-surgeries" name="past-surgeries" placeholder="enter information" required />

                <h3>Allergies</h3>
                <svg style={{ display: 'none' }}>
                  <symbol id="tick-mask" viewBox="0 -960 960 960">
                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                  </symbol>
                </svg>
                <form className="allergies-form">
                  <label>
                    <input type="radio" name="allergy" value="pollen"/>
                    Pollen
                  </label>
                  <label>
                    <input type="radio" name="allergy" value="dust" />
                    Dust Mite
                  </label>
                  <label>
                    <input type="radio" name="allergy" value="pet-dander" />
                    Latex
                  </label>
                  <label>
                    <input type="radio" name="allergy" value="pet-dander" />
                    Insect Sting
                  </label>
                  <label>
                    <input type="radio" name="allergy" value="pet-dander" />
                    Medication
                  </label>
                </form>
                <label htmlFor="healthConcern">Tell Us About Your Health Concern</label>
                <textarea id="healthConcern" name="healthConcern" rows="10" placeholder='message'required></textarea>

                <h2 style={{fontFamily: "Oswald"}}>Insurance Information</h2>

                <label htmlFor="insuranceProvider">Insurance Provider</label>
                <input type="text" id="insuranceProvider" name="insuranceProvider" placeholder="Enter insurance provider" required />                 

                <label htmlFor="policyNumber">Policy Number</label>
                <input type="text" id="policyNumber" name="policyNumber" placeholder="Enter policy number" required />

                <label htmlFor="groupNumber">Group Number</label>
                <input type="text" id="groupNumber" name="groupNumber" placeholder="Enter group number" required />

                <label htmlFor="insuranceContact">Insurance Contact</label>
                <input type="text" id="insuranceContact" name="insuranceContact" placeholder="Enter insurance contact" required />

                <button className="book-appointment-button" style={{backgroundColor: "#292929", marginTop: '40px'}} type="submit">Submit</button>
            </form>
        </div>
        <Footer/>
    </div>
  )
}

export default PatientRegistration