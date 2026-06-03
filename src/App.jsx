import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navsection from "./Navsection"
import Home from "./Home"
import Services from "./Services"
import Navigationbar from "./Navigationbar"
import About from "./About"
import Contact from "./Contact"

function App() {

  return (
    <>
      <BrowserRouter>
        <Navsection />
        <Navigationbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
