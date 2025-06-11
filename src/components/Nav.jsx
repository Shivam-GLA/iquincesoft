import '../css/nav.css';

function Nav() {
  return (
    <>
        <nav id="navbar">
            <img src="/img/logo.png" alt="" className="logo" />
            <ul>
                <li>How it Works</li>
                <li>Our Work</li>
                <li>Pricing</li>
                <li>About Us</li>
            </ul>
            <button className="btn">Get Started</button>
        </nav>
    </>
  )
}

export default Nav
