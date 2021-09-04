function CityShow(props) {
    console.log("city show props")
    console.log(props.cityData)
    
    let cityInfo = null
    if (props.cityData === undefined) {
        cityInfo = {
            name:"",
            picture:"",
            posts:[{
                title:"",
                content:""
            }]
        }
    } else {
        cityInfo = props.cityData
    }
    const cityPosts = cityInfo.posts.map((onePost, idx) => {
        return <li key={idx}>
            <h6>{onePost.title}</h6>
            <p>{onePost.content}</p>
        </li>
    })
    return (
        <div>
            <h1>{cityInfo.name}</h1>
            <h3>{cityInfo.picture}</h3>
            {cityPosts}
        </div>
    )
}

export default CityShow