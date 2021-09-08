import { Component } from "react";
class EditForm extends Component {
    state = {
        title: this.props.post.title,
        content: this.props.post.content
    }
    onTitleInputChange = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    onContentInputChange = (event) => {
        this.setState({
            content: event.target.value,
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        let newPost = {
            "title": this.state.title,
            "content": this.state.content
        }
        this.props.updatePost(this.props.cityID,this.props.post._id, newPost);
        this.setState({
            title: "",
            content: ""
        });
        this.props.toggleBodyForm()
    };
    render() {
        return (
            <div style={this.props.style}>
                <form onSubmit={this.onFormSubmit} >
                    <input 
                        className = "editpost-title"
                        onChange={this.onTitleInputChange}
                        type="text"
                        placeholder="Title"
                        value={this.state.title}
                    />
                    <textarea
                        className = "editpost-textinput"
                        onChange={this.onContentInputChange}
                        placeholder="Content"
                        value={this.state.content}
                    />

                    <button type="submit" className="btn createedit-btn">Update Post</button>
                </form>
            </div>

        )
    }

}
export default EditForm