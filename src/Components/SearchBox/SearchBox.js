import React, { Component } from "react";

export class SearchBox extends Component {
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
   this.props.fetchAllUsers(this.state.value);

}


  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text" name="name" target='_blank'  placeholder='Enter User Name...' onChange={(e)=>this.handleChange(e)}/>
        </label>
        <input type="submit"  value="Submit" target='_blank' onClick={(e)=>this.handleSubmit(e)}/>
      </form>
    );
  }
}

export default SearchBox;
