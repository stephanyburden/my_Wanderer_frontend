function CityShow(props) {
    console.log(props.cityData.picture)
 
    return(
        <div>
            <h1>{props.cityData.name}</h1>
            <h3>{props.cityData.picture}</h3>
        </div>
    )
}

export default CityShow