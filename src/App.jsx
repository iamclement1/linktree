import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer';
import Landing from './pages/Landing';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="App">
        <Landing />
      </div>
      <Footer />
    </Router>
  )
}

export default App
