
import Banner from '../components/Banner.jsx'
import AboutContainer from './AboutContainer.jsx'
import CityContainer from './CityContainer.jsx'
import Footer from '../components/Footer.jsx'
import CityTitle from '../components/CityTitle.jsx'
import '../css/CityList.css'
import '../css/LandingPage.css'

import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

function Homepage(){
    return(
      <div className = "landing-page">
          <Banner/>
          <AboutContainer/>
          <CityTitle/>
          <CityContainer/>
          <Footer/>
      </div>
    )
}
export default Homepage

{/* <Link to='/about'>
<h1 className="homepage-title">wanderer</h1>
</Link>
<h3 className="homepage-text">roam</h3>
<h3 className="homepage-text-one">explore</h3>
<h3 className="homepage-text-two">discover</h3> */}