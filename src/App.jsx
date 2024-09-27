import './App.css'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "@fontsource/oswald/500.css"; // Specify weight



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
