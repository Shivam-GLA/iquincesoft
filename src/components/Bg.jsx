import '../css/bg.css';

function Bg(props) {
    return (
        <>
            <section id="bg">
                <div className="info">
                    <h1 className="heading">{props.title}</h1>
                    <h3 className="subHeading">Home / {props.title}</h3>
                </div>
                <img src={props.imgPath} alt="" />
            </section>
        </>
    )
}

export default Bg
