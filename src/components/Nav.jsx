import '../css/nav.css';
import { NavLink  } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav id="navbar">
        <img src="/img/logo.png" alt="" className="logo" />
        <ul>
          <NavLink  to='/'>How it Works</NavLink>
          <NavLink  to='/about'>About Us</NavLink>
          <NavLink  to='/services'>Services</NavLink>
          <NavLink  to='/blog'>Blog</NavLink>
        </ul>
        <button className="btn">Get Started</button>
      </nav>
    </>
  )
}

export default Nav
