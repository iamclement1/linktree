import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Contact from './pages/Contact';
import Landing from './pages/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={ <Landing /> } />
          <Route path="contact" element={ <Contact /> } />
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App
