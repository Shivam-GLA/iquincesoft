import '../css/footer.css';

function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="box first">
                    <img src="/img/footer/logo.png" alt="" className='logo' />
                    <h3 className="subHeading">We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</h3>
                    <div className="icons">
                        <img src="/img/footer/fb.png" alt="" className="icon" />
                        <img src="/img/footer/twitter.png" alt="" className="icon" />
                        <img src="/img/footer/linkedin.png" alt="" className="icon" />
                        <img src="/img/footer/instra.png" alt="" className="icon" />
                    </div>
                </div>
                <div className="box right">
                    <h1 className="subHeading">Navigation</h1>
                    <div className="container">
                        <h3 className="subHeading">Service</h3>
                        <h3 className="subHeading">Agency</h3>
                        <h3 className="subHeading">Case Study</h3>
                        <h3 className="subHeading">Resource</h3>
                        <h3 className="subHeading">Contact</h3>
                    </div>
                </div>
                <div className="box right">
                    <h1 className="subHeading">Licence</h1>
                    <div className="container">
                        <h3 className="subHeading">Privacy Policy</h3>
                        <h3 className="subHeading">Copyright</h3>
                        <h3 className="subHeading">Email Address</h3>
                    </div>
                </div>
                <div className="box right contact">
                    <h1 className="subHeading">Contact</h1>
                    <div className="container">
                        <h3 className="subHeading"><img src="/img/footer/call.png" alt="" />(406) 555-0120</h3>
                        <h3 className="subHeading"><img src="/img/footer/email.png" alt="" />Hey@boostim.com</h3>
                        <h3 className="subHeading"><img src="/img/footer/location.png" alt="" />2972 Westheimer Rd. Santa Ana, Illinois 85486 </h3>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
