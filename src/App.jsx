import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "@fontsource/oswald/500.css"; // Specify weight
import BookAppointment from './Pages/BookAppointment';
import PatientRegistration from './Pages/PatientRegistration';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/register" element={<PatientRegistration />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
