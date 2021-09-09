import React from 'react'
import Header from '../components/Header'
import '../css/AboutPage.css'
import { Carousel } from 'react-carousel-minimal';




class AboutPage extends React.Component {
    render() {
        const data = [
            {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
                caption: "San Francisco"
            },
            {
                image: "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
                caption: "Scotland"
            },
            {
                image: "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
                caption: "Darjeeling"
            },
            {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
                caption: "San Francisco"
            },
            {
                image: "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
                caption: "Scotland"
            },
            {
                image: "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
                caption: "Darjeeling"
            },
            {
                image: "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
                caption: "San Francisco"
            },
            {
                image: "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
                caption: "Scotland"
            },
            {
                image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
                caption: "Darjeeling"
            }
        ];

        const captionStyle = {
            fontSize: '2em',
            fontWeight: 'bold',
        }
        const slideNumberStyle = {
            fontSize: '20px',
            fontWeight: 'bold',
        }
        return (
            <div id="Aboutpage-wrapper">
                <Header />
                <div id="aboutpage-container">
                    <section className="post">
                        <header className="about-page-content">
                            <h1>Why pick Wanderer?<br /></h1>
                            <p>WANDERER has a worldwide nearness with presence in cities all across the world.</p>
                        </header>
                        <div style={{
                            padding: "0 20px"
                        }}>
                            <Carousel
                                data={data}
                                time={2000}
                                width="850px"
                                height="500px"
                                captionStyle={captionStyle}
                                radius="10px"
                                slideNumber={false}
                                slideNumberStyle={slideNumberStyle}
                                captionPosition="bottom"
                                automatic={true}
                                dots={true}
                                pauseIconColor="white"
                                pauseIconSize="40px"
                                slideBackgroundColor="darkgrey"
                                slideImageFit="cover"
                                thumbnails={true}
                                thumbnailWidth="100px"
                                style={{
                                    textAlign: "center",
                                    maxWidth: "auto",
                                    maxHeight: "auto",
                                    margin: "40px auto",
                                }}
                            />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus. Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum.</p>
                    </section>

                </div>
            </div>

        )
    }
}

export default AboutPage

