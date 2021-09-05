const url = "http://localhost:4000/api/city"
class CityModel{
    static all(){
        return fetch(url)
            .then((response)=>{
                return response.json()
            })
            .catch((err)=>{
                console.log(err)
            })
    }
    
    //makes a fetch call to our posts controller to show a post
    static show(cityId, postId) {
        return fetch(`${url}/${cityId}/posts/${postId}`)
            .then((response) => response.json())
    }
}

export default CityModel