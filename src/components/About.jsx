import Bg from "./Bg"
import Bio from "./Bio"
import logo from '/img/bg/img1.png'

function About() {
  return (
    <>
      <Bg title='About Us' imgPath={logo} />
      <Bio />
    </>
  )
}

export default About
