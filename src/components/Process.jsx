import '../css/process.css'

function Process() {
  return (
    <>
      <section id="process">
        <h1 className="heading">Our Process</h1>
        <div className="container">
            <div className="box">
                <div className="num">1</div>
                <img src="/img/process/img1.png" alt="" />
                <h1 className="heading">Consultation</h1>
                <h3 className="subHeading">Discuss goals, challenges, and specific needs of your non-profit.</h3>
            </div>
            <div className="box">
                <div className="num">2</div>
                <img src="/img/process/img2.png" alt="" />
                <h1 className="heading">Strategy Development</h1>
                <h3 className="subHeading">Create a tailored marketing strategy focusing on high-impact channels.</h3>
            </div>
            <div className="box">
                <div className="num">3</div>
                <img src="/img/process/img3.png" alt="" />
                <h1 className="heading">Implementation</h1>
                <h3 className="subHeading">Launch and manage campaigns across platforms like Google, social media, and SEO.</h3>
            </div>
            <div className="box">
                <div className="num">4</div>
                <img src="/img/process/img4.png" alt="" />
                <h1 className="heading">Optimization and Reporting</h1>
                <h3 className="subHeading">Monitor performance, optimize for better results, and provide transparent reporting.</h3>
            </div>
        </div>
      </section>
    </>
  )
}

export default Process
