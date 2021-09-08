import { Component } from 'react';
import '../css/CityShowPage.css';


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
        "title":this.state.title,
        "content":this.state.content
    }
    this.props.createPost(newPost,this.props.cityID);
    this.setState({
      title:"",
      content:""
    });
  };
  
  render() {
    return (
      <div>
        <br/>
        <br/>
        <form onSubmit={this.onFormSubmit} >
          <input 
            className = "createpost-title"  
            onChange={this.onTitleInputChange} 
            type="text" 
            placeholder="Name your adventure..." 
            value={this.state.title}
          />
          <br/>
          <br/>
          <textarea
            className = "createpost-textinput"  
            onChange={this.onContentInputChange} 
            placeholder="Tell your story..." 
            value={this.state.content}
          />
          <br />
          <br />
          <button type="submit" className="btn createpost-btn">Share</button>
        </form>
        <br />
        <br />
        <hr className = "cityshow-hr"/>
      </div>
    );
  };
};

export default CreatePostForm;
