import React, { Component } from "react";

 class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
        value: ''
    };

  }

  handleChange= (event)=> {
    this.setState({value: event.target.value});
  }

  handleSubmit=(event)=>{
  event.preventDefault();
  if(!this.state.value) return
   this.props.setCurrentUserList(this.state.value);
}


  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" target='_blank'  value={this.state.value} placeholder='Enter User Name...' onChange={(e)=>this.handleChange(e)}/>
        </label>
        <input type="submit"  value="Submit" target='_blank' onClick={(e)=>this.handleSubmit(e)}/>
      </form>
    );
  }
}

export default SearchBox;
