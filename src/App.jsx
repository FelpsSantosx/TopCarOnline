import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react"
import Header from "./components/Header"
import CarDetails from "./pages/carDetails"
import Footer from "./components/Footer"
import About from "./pages/about"
import Home from "./pages/home"

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
