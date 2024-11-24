import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/home"
import CarDetails from "./pages/carDetails"
import About from "./pages/about"
import SignIn from "./pages/signIn"

function App() {

  return (

    <>

      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/carDetails" element={<CarDetails />}/>
          <Route path="/sigIn" element={<SignIn />}/>
        </Routes>
        <Footer />
      </Router>
      
    </>

  )

}

export default App
