import '../css/home.css';
import Who from './Who.jsx';
import Overview from './Overview.jsx';
import Test from './Test.jsx';
import Process from './Process.jsx';
import ChooseUs from './ChooseUs.jsx';
import Result from './Result.jsx';
import GreatWork from './GreatWork.jsx';
import Seo from './Seo.jsx';
import Img1 from '/img/background/bg3.png';
import Img2 from '/img/background/bg4.gif';


function Home() {
    return (
        <>
            <section id="home">
                <div className="info">
                    <h1>Two Agencies, One Mission: Growing Your Business to Impact the World.</h1>
                    <h3>Driving Impact Through Tailored Strategies in Google Ads, Social Media, SEO, and More</h3>
                    <button className="btn btn-blue">Get Started</button>
                </div>
            </section>
            <Who heading='Who We' color='Are' subHeading='Unity blends partnership with purpose. Our digital marketing agency partners with businesses to drive growth while dedicating profits to local and global charities.' />
            <Overview />
            <section id="awards">
                <div className="info">
                    <h1 className="heading">245%</h1>
                    <h3 className="subHeading">More revenues for the brand</h3>
                </div>
                <div className="info">
                    <h1 className="heading">130K+</h1>
                    <h3 className="subHeading">Audiences reached</h3>
                </div>
                <div className="info">
                    <h1 className="heading">50+</h1>
                    <h3 className="subHeading">brands trust us</h3>
                </div>
                <div className="info">
                    <h1 className="heading">24+</h1>
                    <h3 className="subHeading">Worldwide awards</h3>
                </div>
            </section>
            <Test />
            <Process />
            <ChooseUs title='Why Choose Us Partner With Unity' img1path={Img1} img2path={Img2} />
            <Result />
            <GreatWork />
            <Seo />
        </>
    )
}

export default Home
