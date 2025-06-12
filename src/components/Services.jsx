import Bg from "./Bg"
import Overview from "./Overview"
import Test from "./Test"
import GreatWork from "./GreatWork"
import logo from '/img/bg/img2.png'

function Services() {
  return (
    <>
      <Bg title='Services' imgPath={logo} />
      <Overview />
      <Test />
      <GreatWork />
    </>
  )
}

export default Services
