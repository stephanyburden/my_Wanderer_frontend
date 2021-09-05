import { Component } from 'react';

class CreatePostForm extends Component {
  state = {
    title: '',
    content:''
  };
  
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
        title:this.state.title,
        content:this.state.content
    }
    console.log(newPost)
    this.props.createPost(newPost,this.props.cityID);
    this.setState({
      title:"",
      content:""
    });
  };
  
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} >
          <input  
            onChange={this.onTitleInputChange} 
            type="text" 
            placeholder="Title" 
            value={this.state.title}
          />
          <input  
            onChange={this.onContentInputChange} 
            type="text" 
            placeholder="Content" 
            value={this.state.content}
          />
          
          <button type="submit" className="btn">Create Post</button>
        </form>
      </div>
    );
  };
};

export default CreatePostForm;
