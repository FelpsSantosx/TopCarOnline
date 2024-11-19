import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "./Pages/about"
import CarDetails from "./Pages/carDetails"
import Home from "./Pages/home"

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/carDetails" element={<CarDetails />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )

}

export default App
