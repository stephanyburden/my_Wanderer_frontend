import { Link } from 'react-router-dom'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import '../css/Homepage.css'

function Banner() {
    return (
        <div className = "homepage-container">
        <Link to = '/about'>
            <h1 className = "homepage-title">Wanderer</h1>
        </Link>
        <h3 className = "homepage-text">roam</h3>
        <h3 className = "homepage-text-one">explore</h3>
        <h3 className = "homepage-text-two">discover</h3>
    </div>
        // <ParallaxProvider>
        //     <ParallaxBanner
        //         className="your-class"
        //         layers={[
        //             {
        //                 image: image,
        //                 amount: 0.4,
        //             },
        //         ]}
        //         style={{
        //             height: '100vh',
        //         }}
        //     >
        //         <Link to='/about'>
        //             <h1 className="homepage-title">wanderer</h1>
        //         </Link>
        //         <h3 className="homepage-text">roam</h3>
        //         <h3 className="homepage-text-one">explore</h3>
        //         <h3 className="homepage-text-two">discover</h3>
        //     </ParallaxBanner>
        // </ParallaxProvider>

    )
}
export default Banner

{/* */}