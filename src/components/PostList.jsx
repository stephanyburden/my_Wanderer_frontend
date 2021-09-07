import React from "react";
import SinglePost from "./SinglePost.jsx";
const PostList = (props)=>{
    let posts = props.posts.map((post)=>{
        return(
            <SinglePost
                key={post._id}
                post={post}
                cityID={props.cityID}
                deletePost={props.deletePost}
                updatePost={props.updatePost}
            />
        )
    })
    return (
        <ul>
            {posts}
        </ul>
    )
}
export default PostList


