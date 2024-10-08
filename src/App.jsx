import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "@fontsource/oswald/300.css"; // Light weight
import "@fontsource/oswald/400.css"; // Regular weight
import "@fontsource/oswald/500.css"; // Medium weight
import "@fontsource/oswald/600.css"; // Semi-Bold weight
import BookAppointment from './Pages/BookAppointment';
import PatientRegistration from './Pages/PatientRegistration';
import Services from './Pages/Services';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/register" element={<PatientRegistration />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
