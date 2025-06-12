import '../css/workWithUs.css';

function WorkWithUs(props) {
    return (
        <>
            <section id="work">
                <h1 className="heading">{props.heading}</h1>
                <button className="btn">{props.btnText}</button>
            </section>
        </>
    )
}

export default WorkWithUs
