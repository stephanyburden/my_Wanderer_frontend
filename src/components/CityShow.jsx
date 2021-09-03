function CityShow(props) {
    console.log("city show props")
    console.log(props.cityData)
    const cityPosts = props.cityData.posts.map((onePost,idx)=>{
        return <li key={idx}>
                <h6>{onePost.title}</h6>
                <p>{onePost.content}</p>
             </li>
    })
 
    return(
        <div>
            <h1>{props.cityData.name}</h1>
            <h3>{props.cityData.picture}</h3>
            {cityPosts}
        </div>
    )
}

export default CityShow