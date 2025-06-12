import Bg from "./Bg"
import Seo from "./Seo"
import Test from "./Test"
import GreatWork from "./GreatWork"
import logo from '/img/bg/img3.png'

function Blog() {
    return (
        <>
            <Bg title='Blog' imgPath={logo}/>
            <Seo />
            <Test />
            <GreatWork />
        </>
    )
}

export default Blog
