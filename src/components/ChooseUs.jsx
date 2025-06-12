import '../css/chooseUs.css'

function ChooseUs(props) {
    return (
        <>
            <section id="chooseUs">
                <div className="bg-container">
                    <img src={props.img1path} className="bg-img" alt="" />
                </div>
                <img src={props.img2path} alt="" className="left" />
                <div className="info">
                    <h1 className="heading">{props.title}</h1>
                    <div className="container">
                        <div className="item">
                            <img src="/img/chooseUs/img1.png" alt="" />
                            <div className="container">
                                <h3 className="subHeading">Mission Alignment</h3>
                                <h4 className="subHeading">We understand the goals and challenges of non-profits and are committed to making every dollar count.</h4>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/img/chooseUs/img2.png" alt="" />
                            <div className="container">
                                <h3 className="subHeading">Expertise</h3>
                                <h4 className="subHeading">With years of experience in digital marketing for non-profits, we focus on strategies that drive engagement and support.</h4>
                            </div>
                        </div>
                        <div className="item">
                            <img src="/img/chooseUs/img3.png" alt="" />
                            <div className="container">
                                <h3 className="subHeading">Transparency</h3>
                                <h4 className="subHeading">We provide detailed reports and maintain open communication to ensure you always know where your resources go.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default ChooseUs
