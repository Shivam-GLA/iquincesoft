import Bg from "./Bg"
import Bio from "./Bio"
import Who from "./Who"
import WhyBusiness from "./WhyBusiness"
import ChooseUs from "./ChooseUs"
import Test from "./Test"
import GreatWork from "./GreatWork"
import logo from '/img/bg/img1.png'
import Img1 from '/img/background/bg6.png';
import Img2 from '/img/background/bg5.png';


function About() {
  return (
    <>
      <Bg title='About Us' imgPath={logo} />
      <Bio />
      <Who heading='Mission' color='Statement' subHeading='At Partner With Unity, we exist to empower nonprofits and local businesses to grow their reach, achieve their goals, and make a meaningful impact in their communities and beyond. Our mission is rooted in the belief that growth should serve a higher purpose, which is why every project we complete fuels not only the success of our clients but also supports global and local charities through our commitment to give back 10% of all proceeds.' />
      <WhyBusiness />
      <ChooseUs title='Biggest Benefits of Our Services' img1path={Img1} img2path={Img2} />
      <Test />
      <GreatWork />
    </>
  )
}

export default About
