import '../css/test.css';


function Test() {
    return (
        <>
            <section id="test">
                <div className="arr">
                <img src="/img/arrow-left-solid.svg" alt="" />
                </div>
                <div className="middle">
                    <div className="info">
                        <h1 className="heading">Testimonials</h1>
                        <h3 className="subHeading">My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</h3>
                        <div className="profile">
                            <img src="/img/img1.png" alt="" className="logo" />
                            <div className="container">
                                <h3 className="subHeading">Geri Cusenza</h3>
                                <h4 className="subHeading">Founder Sabastian</h4>
                            </div>
                        </div>
                        <div className="dots">
                            <div className="box"></div> 
                            <div className="box"></div>
                            <div className="box"></div>
                            <div className="box"></div>
                        </div>
                    </div>
                </div>
                <div className="arr">
                <img src="/img/arrow-right-solid.svg" alt="" />
                </div>
            </section>
        </>
    )
}

export default Test
