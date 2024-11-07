import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"


function App() {

  return (

    <>

      <Router>

        <Header />

        <Routes>

          <Route path="/" element={<Home />} />

        </Routes>

        <Footer />

      </Router>

    </>
  )

}

export default App
