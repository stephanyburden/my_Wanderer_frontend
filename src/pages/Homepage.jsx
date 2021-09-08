
import Banner from '../components/Banner.jsx'
import AboutContainer from './AboutContainer.jsx'
import CityContainer from './CityContainer.jsx'
import Footer from '../components/Footer.jsx'
import '../css/CityList.css'

function Homepage(){
    return(
        <div>
            <Banner/>
            <AboutContainer/>
            <CityContainer/>
            <Footer/>
        </div>
    )
}
export default Homepage