import '../css/nav.css';
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <>
      <nav id="navbar">
        <NavLink to='/'><img src="/img/logo.png" alt="" className="logo" /></NavLink>
        <ul>
          <NavLink to='/'>{props.title1}</NavLink>
          <NavLink to='/about'>{props.title2}</NavLink>
          <NavLink to='/services'>{props.title3}</NavLink>
          <NavLink to='/blog'>{props.title4}</NavLink>
        </ul>
        <button className="btn">{props.btnText}</button>
      </nav>
    </>
  )
}

export default Nav
