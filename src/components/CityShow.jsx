function CityShow(props) {
    console.log(props.cityData)
    
    let cityInfo = null

    //conditional that helps prevent something if the data call is slower than the page load 
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

    //maps the data to access the props array (think recipelist and recipe component in one from the recipe lesson)
    const cityPosts = cityInfo.posts.map((onePost, idx) => {
        return <li key={idx}>
            <h3>{onePost.title}</h3>
            <p>{onePost.content}</p>
        </li>
    })

    return (
        <div>
            <h1>{cityInfo.name}</h1>
            <img alt = "city" src = {cityInfo.picture}/>
            <br/>
            <Link
            <button>Add New Post</button>
            {cityPosts}
        </div>
    )
}

export default CityShow