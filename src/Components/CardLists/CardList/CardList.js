import React, { Component } from "react";
import './CardList.scss'
import Card from "../Card/Card";
import CardPopup from '../CardPopup/CardPopup';


export class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
      currentUser: {},
      showPopup: false
    };
  }

  fetchUserDetails = async (userName) => {
     let userDetail =  this.getCurrentUserDetails(userName);
     if(!userDetail){
        let response = await fetch(` https://api.github.com/users/${userName}`);
        let data = await response.json();
        this.setState((prevState) => ({
          userDetails: [...prevState.userDetails, data],
          currentUser: { ...data }
        }));
     }
     else 
     this.setState({ currentUser: userDetail })
  };


  getCurrentUserDetails(userName){
      let user = this.state.userDetails.find(u => u.login === userName )
      return user;
  }

  handleUserDetail = async(userName,val)=>{
    if(!this.getCurrentUserDetails(userName)){
        await this.fetchUserDetails(userName);
        this.handlePopup(val)
    }
    this.handlePopup(val)

  }

  handlePopup =(val)=>{
    this.setState({showPopup: val})
  }

  render() {
    return (
      <div className="gca-card_list">
        {this.props.userList.map((user) => (
          <Card
            user={user}
            key={user.id}
            handleUserDetail={(userName,val) => this.handleUserDetail(userName,val)}
          />
        ))}           
         {this.state.showPopup ? <CardPopup currentUser={this.state.currentUser} handlePopup={(val)=> this.handlePopup(val)} /> : <div></div>}
      </div>
    );
  }
}

export default CardList;
