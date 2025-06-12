import '../css/who.css';

function Who(props) {
    return (
        <>
            <section id="who">
                <div className="info">
                    <h1 className="heading">{props.heading} <span>{props.color}</span></h1>
                    <div className="line"></div>
                    <h3 className="subHeading">{props.subHeading}</h3>
                </div>
            </section>
        </>
    )
}

export default Who
