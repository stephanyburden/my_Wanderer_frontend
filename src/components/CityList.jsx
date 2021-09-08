import { Link } from 'react-router-dom'
import '../css/Homepage.css'

function CityList(props) {

    //updates props, which triggers calling it on our city container page
    function handleCityClick(idx) {
        props.updateCityIndex(idx)
        console.log("list element clicked" + idx)
    }

    //variable that loops through the city data and returns just a name for our "sidebar"
    //what's most important here is that it has an onClick function that will get our index back to our container 
    //to update that state
    const allCities = props.cityData.map((oneCity, idx) => {
        return (
            <article>
                <div className="city-cards" key={idx}>
                    <li
                        
                        onClick={() => handleCityClick(idx)}
                    >
                        <h4>{oneCity.name}</h4>
                        <img src={oneCity.picture}></img>
                    </li>
                    <Link  to={`cities/${oneCity._id}`}>
                        View City
                    </Link>

                </div>

            </article>

        )
    })
    return (
        <div>
            {allCities}
        </div>
    )
}

export default CityList