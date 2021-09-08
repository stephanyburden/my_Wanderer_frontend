import React from 'react';
import CityModel from '../models/CityModel';
import Header from '../components/Header';

class PostShowPage extends React.Component {
    state = {
        title: "",
        content: ""
    }

    componentDidMount() {
        const cityId = this.props.match.params.cityId
        const postId = this.props.match.params.postsId;

        CityModel.showPost(cityId, postId).then((data) => {
            console.log("post show")
            console.log(data)
            this.setState({
                title: data.title,
                content: data.content
            })
        })
    }

    render() {
        return (
            <div>
                <Header />
                <h1>Post Show Page</h1>
                <h3>{this.state.title}</h3>
                <p>{this.state.content}</p>
            </div>
        )
    }
}

export default PostShowPage;