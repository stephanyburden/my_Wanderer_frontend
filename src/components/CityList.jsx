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
            <li
                key={idx}
                onClick={() => handleCityClick(idx)}
            >
                {oneCity.name}
            </li>
        )
    })
    return (
        <div>
            {allCities}
        </div>
    )
}

export default CityList