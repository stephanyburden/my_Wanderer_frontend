import {Link} from 'react-router-dom'
import '../css/CityShowPage.css';

function Post(props) {
    return(
        <div>
            <Link to = {`${props.cityId}/posts/${props.onePost._id}`}>
                <h2 className = "post-caption">Adventures</h2>
                <h3 className = "post-title">{props.onePost.title}</h3>
            </Link>
            
        </div>
    )
}

export default Post