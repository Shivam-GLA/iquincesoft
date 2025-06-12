import '../css/bio.css'
import Img1 from '/img/bio/img1.png'
import Img2 from '/img/bio/img2.png'

function Bio() {

  const name1 = 'Jonathan Allen';
  const name2 = 'Pastor Jason Cooper';

  return (
    <>
      <section className="bio">
        <img src={Img1} alt="" />
        <div className="container">
          <h1 className="heading">{name1}</h1>
          <h3 className="subHeading">Growing up off the grid in Alaska, I learned the value of hard work, resilience, and community. From working in commercial fishing to helping neighbors with projects, those early experiences shaped my resourcefulness and drive to serve others.</h3>
          <h3 className="subHeading">My career began in social work and managing wellness centers, where I developed a passion for helping people thrive. Later, at Apple, I honed my expertise in digital marketing and AI automation, which became the foundation of Spotlight Marketing Results, my agency that has delivered consistent results for clients over the past several years.</h3>
          <h3 className="subHeading">At Partner With Unity, I combine marketing expertise with a mission to create meaningful change. We specialize in helping nonprofits and local businesses grow their reach while giving back—committing 10% of our proceeds to global and local charities. For me, growth isn't just about success; it's about building a legacy that makes the world a better place.</h3>
          <h3 className="subHeading">When I'm not working, I'm adventuring with my dog, traveling, participating in missions work, or training in mixed martial arts.</h3>
          <h3 className="subHeading">Let's grow together, make an impact, and leave a lasting legacy.</h3>
        </div>
      </section>
      <section className="bio reverse">
        <img src={Img2} alt="" />
        <div className="container">
          <h1 className="heading">{name2}</h1>
          <h3 className="subHeading">I am a cultural thought leader and pastor, known for integrating creativity and spirituality to help heal cultural and diversity boundaries, bringing the kingdom of heaven to earth. As the founder and lead pastor of Redemption Church in Clifton Park, New York, I've built one of the area's most diverse and innovative faith communities.</h3>
          <h3 className="subHeading">My journey in ministry has allowed me to connect with over 59 nonprofits, giving me a deep understanding of the unique challenges organizations face when it comes to expanding their missions and engaging their supporters. This passion for service is what led me to co-found Partner With Unity, where we blend faith, purpose, and innovative marketing strategies to help nonprofits and local businesses grow their reach and make a meaningful impact.</h3>
          <h3 className="subHeading">My specialties include motivational speaking, leadership, and effective communication, which I use to inspire both organizations and individuals to reach their full potential. What excites me most about this partnership is knowing that every campaign fuels something greater—whether it's helping a local business thrive or supporting missions that change lives.</h3>
          <h3 className="subHeading">I believe growth is an opportunity to give back, and I'm honored to walk alongside our clients in creating lasting impact.</h3>
        </div>
      </section>
    </>
  )
}

export default Bio
