import {Link} from 'react-router-dom'

function Post(props) {
    return(
        <div>
            <Link to = {`cities/${props.cityId}/posts/${props.onePost._id}`}>
                <h3>{props.onePost.title}</h3>
            </Link>
            <p>{props.onePost.content}</p>
        </div>
    )
}

export default Post