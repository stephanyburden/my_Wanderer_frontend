function CityList(props) {
    /* console.log(props.oneCity) */
    function handleCityClick(idx) {
        props.updateCityIndex(idx)
        console.log("list element clicked" + idx)
    }

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