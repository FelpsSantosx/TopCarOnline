import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/home"
import Footer from "./components/Footer"
import About from "./pages/about"
import CarDetails from "./pages/carDetails"

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
