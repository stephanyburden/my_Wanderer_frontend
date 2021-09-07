import React from 'react'
import Header from '../components/Header'

class AboutContainer extends React.Component {
    render(){
        return(
            <div className="is-preload">

            {/* <!-- Wrapper --> */}
                <div id="wrapper">
                    {/* <!-- Nav --> */}
                   <Header />
                    {/* <!-- Main --> --> */}
                        <div id="main">

                            {/* <!-- Post --> */}
                                <section className="post">
                                    <header className="major">
                                        <h1>What is Gypsy?<br /></h1>
                                        <p> we like to jump off cliff and do crazy shit. Aenean ornare velit lacus varius enim ullamcorper proin aliquam<br />
                                        facilisis ante sed etiam magna interdum congue. Lorem ipsum dolor<br />
                                        amet nullam sed etiam veroeros.</p>
                                    </header>
                                    <div className="image main"><img src="images/aboutpage_bhutantemple.jpg" alt="" /></div>
                                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fergiat. Pellentesque in mi eu massa lacinia malesuada et a elit. Donec urna ex, lacinia in purus ac, pretium pulvinar mauris. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur sapien risus, commodo eget turpis at, elementum convallis enim turpis, lorem ipsum dolor sit amet nullam.</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus. Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum.</p>
                                </section>

                        </div>
                {/* <!-- Scripts --> */}
                    <script src="assets/js/jquery.min.js"></script>
                    <script src="assets/js/jquery.scrollex.min.js"></script>
                    <script src="assets/js/jquery.scrolly.min.js"></script>
                    <script src="assets/js/browser.min.js"></script>
                    <script src="assets/js/breakpoints.min.js"></script>
                    <script src="assets/js/util.js"></script>
                    <script src="assets/js/main.js"></script>
                 </div>    
        </div>
        )
    }
}
    
export default AboutContainer


               

