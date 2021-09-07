import React from 'react';
import CityModel from '../models/CityModel';
import CreatePostForm from '../components/CreatePostForm.jsx'
import PostList from '../components/PostList.jsx'

class CityShowPage extends React.Component {
    state = {
        name: "",
        picture: "",
        posts: []
    }

    componentDidMount() {
        const cityId = this.props.match.params.cityId

        CityModel.showCity(cityId).then((data) => {
            this.setState({
                name: data.name,
                picture: data.picture,
                posts: data.posts
            })
        })
    }
    createPost = (post, cityID)=> {        
        CityModel.newPost(cityID, post).then((res) => {
            let resPosts = this.state.posts    
            resPosts.push(res)
            this.setState({
                posts: resPosts
            })            
        })        
    }

    deletePost = (cityId, postID)=>{
        console.log("deleting...")
        console.log(postID)
        console.log("cityid is")
        console.log(cityId)
        CityModel.deletePost(cityId,postID).then((res)=>{
            console.log("res is")
            console.log(res)
            let currentPosts = this.state.posts
            let updatedPosts= currentPosts.filter((post)=>{
                return post._id !== res._id
            })
            this.setState({posts:updatedPosts})
        }).catch((err)=>{
            console.log(err)
        })
    }
    updatePost = (cityId,postID,post)=>{
        console.log("update")
    }
    
    render() {
        
        return (
            <div>
                <h3>{this.state.name}</h3>
                <img src={this.state.picture} alt="" />
                <CreatePostForm cityID={this.props.match.params.cityId}createPost={this.createPost}/>
                <PostList
                posts={this.state.posts}
                cityID={this.props.match.params.cityId}
                deletePost={this.deletePost}
                updatePost={this.updatePost}
                />
            </div>
        )
    }
}

export default CityShowPage;