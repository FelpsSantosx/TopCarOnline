import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/home"
import CarDetails from "./pages/carDetails"
import About from "./pages/about"
import SigIn from "./pages/sigIn"

function App() {

  return (

    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/carDetails" element={<CarDetails />}/>
          <Route path="/sigIn" element={<SigIn />}/>
        </Routes>
        <Footer />
      </Router>
      
    </>

  )

}

export default App
