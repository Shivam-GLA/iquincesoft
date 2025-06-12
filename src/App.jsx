import './App.css'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Blog from './components/Blog'
import WorkWithUs from './components/WorkWithUs';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  return (
    <>
      <Router>
        <Nav title1='How it Works' title2='About Us' title3='Services' title4='Blog' btnText='Get Started' />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/blog" element={<Blog />}></Route>
        </Routes>
        <WorkWithUs heading='Ready to work with us ?' btnText='Get Started' />
        <Footer />
      </Router>
    </>
  )
}

export default App
