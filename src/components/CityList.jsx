function CityList(props){
    console.log(props.oneCity)


    return(
        <div>
           <h3>{props.oneCity.name}</h3>
        </div>
    )
    
}

export default CityList