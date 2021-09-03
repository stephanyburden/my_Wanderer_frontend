import CityList from '../components/CityList.jsx'
import {Component} from 'react'
import CityModel from '../models/CityModel.js'
import CityShow from '../components/CityShow.jsx'


class CityIndex extends Component{
    state = {
        cityData: [],
        categoryIndex: 0
    }
    
    // grab data and add to state
        //so that we can then pass data down as props to all our different props
    componentDidMount() {
      this.fetchData()
    }

    fetchData = () => {
        CityModel.all().then((data) => {
            console.log(data)
            this.setState({
                cityData: data
            })
        })
    }

    // map city names and images to a list
    updateCityIndex = (idx) => {
        this.setState({
            categoryIndex: idx
        });
    }

    
    // map information for a city to a show component
    // map the
    render(){
        let cityNames = this.state.cityData.map((oneCity, idx) => {
            return(
                <CityList key = {idx} oneCity = {oneCity} />
            )
        })

        return(
            <div>
                <div>
                    {cityNames} {/* left side, uses all city names/images */}
                </div>
                <CityShow cityData = {this.state.cityData[0]}/> {/* top right, uses one city id */}
            
            </div>
        )
    }
}
    
export default CityIndex


{/* <CityPosts/> bottom right, uses one city's posts */} 