import {Link} from 'react-router-dom'

function Post(props) {
    return(
        <div>
            <Link to = {`${props.cityId}/posts/${props.onePost._id}`}>
                <h3>{props.onePost.title}</h3>
            </Link>
            
        </div>
    )
}

export default Post