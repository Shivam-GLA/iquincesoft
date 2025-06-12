import '../css/whyBusiness.css';
import Img1 from '/img/background/bg7.png';

function WhyBusiness() {

    const title = 'Why Are We a Needed Business?';
    const para1 = 'Nonprofits often struggle with limited resources, outdated marketing strategies, and the challenge of connecting with the right audience. Local businesses face fierce competition and the need to adapt to the ever-changing digital landscape. These challenges prevent them from reaching their full potential and fulfilling their missions.';
    const para2 = 'Partner With Unity bridges this gap by providing expert, mission-driven digital marketing services tailored to these unique needs. We help nonprofits secure funding, grow donor bases, and amplify their causes, while empowering local businesses to attract more customers, enhance their online presence, and achieve sustainable growth.';

    return (
        <>
            <section className="whyBusiness">
                <img src={Img1} alt="" />
                <div className="container">
                    <h1 className="heading">{title}</h1>
                    <h3 className="subHeading">{para1}</h3>
                    <h3 className="subHeading">{para2}</h3>
                </div>
            </section>
        </>
    )
}

export default WhyBusiness
