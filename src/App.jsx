import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import About from "../pages/about"
import CarDetails from "./pages/carDetails"
import Home from "./pages/home"
import SignIn from "./pages/signIn"

import "./app.css"

function App() {

  return (

    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/carDetails" element={<CarDetails />} />
          <Route path="/signIn" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>

  )

}

export default App
