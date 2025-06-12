import '../css/overview.css'

function Overview() {
    return (
        <>
            <section id="overview">
                <div className="info">
                    <h1 className="heading">Key Services Overview</h1>
                    <h3 className="subHeading">Lorem ipsum dolor sit amet consectetur. Eu risus sollicitudin vitae fames ipsum metus metus ultrices. Faucibus enim neque id. </h3>
                </div>
                <div className="keys">
                    <div className="box">
                        <img src="../img/services/img1.png" alt="" className="logo" />
                        <div>
                            <h1 className="heading">Google Advertising</h1>
                            <div className="line"></div>
                        </div>
                        <h3 className="subHeading">Reach the right audience with targeted Google Ads for non-profits</h3>
                    </div>
                    <div className="box">
                        <img src="../img/services/img2.png" alt="" className="logo" />
                        <div>
                            <h1 className="heading">Social Media Advertising</h1>
                            <div className="line"></div>
                        </div>
                        <h3 className="subHeading">Expand your cause's reach with effective social media campaigns.</h3>
                    </div>
                    <div className="box">
                        <img src="../img/services/img3.png" alt="" className="logo" />
                        <div>
                            <h1 className="heading">Search Engine Optimization</h1>
                            <div className="line"></div>
                        </div>
                        <h3 className="subHeading">Improve visibility and drive organic support with SEO strategies tailored for non-profits.</h3>
                    </div>
                    <div className="box">
                        <img src="../img/services/img4.png" alt="" className="logo" />
                        <div>
                            <h1 className="heading">Social Media Management</h1>
                            <div className="line"></div>
                        </div>
                        <h3 className="subHeading">Engage your community with consistent, impactful social media management.</h3>
                    </div>
                    <div className="box">
                        <img src="../img/services/img5.png" alt="" className="logo" />
                        <div>
                            <h1 className="heading">Web Design</h1>
                            <div className="line"></div>
                        </div>
                        <h3 className="subHeading">Create a website that reflects your mission and drives donor engagement.</h3>
                    </div>
                </div>
                <button className="btn btn-overview">Learn More</button>
            </section>
        </>
    )
}

export default Overview
