import React, { Component } from "react";
import Card from "../Card/Card";
import CardPopup from "../CardPopup/CardPopup";
import DropDown from "../../Common/Dropdown/Dropdown";
import "./CardList.scss";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: this.props.userList,
      userDetails: [],
      currentUser: {},
      showPopup: false,
    };
  }


  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.userList!==prevState.userList){
      return { userList: nextProps.userList};
   }
   else return null;
 }
 

  fetchUserDetails = async (userName) => {
    let userDetail = this.getCurrentUserDetails(userName);
    if (!userDetail) {
      let response = await fetch(` https://api.github.com/users/${userName}`);
      let data = await response.json();
      this.setState((prevState) => ({
        userDetails: [...prevState.userDetails, data],
        currentUser: { ...data },
      }));
    } else this.setState({ currentUser: userDetail });
  };

  getCurrentUserDetails(userName) {
    let user = this.state.userDetails.find((u) => u.login === userName);
    return user;
  }

  handleUserDetail = async (userName, val) => {
    await this.fetchUserDetails(userName);
    this.handlePopup(val);
    return;
  };

  handlePopup = (val) => {
    this.setState({ showPopup: val });
  };


  render() {
    return (
      <div>
        {this.state.userList && this.state.userList.length ? (
          <div>
            <span>
              <DropDown
                sortItems={this.props.sortItems}
                sortHandler={(id) => this.props.sortHandler(id)}
              />
            </span>
            <div className="gca-card_list">
              {this.state.userList.map((user) => (
                <Card
                  user={user}
                  key={user.id}
                  handleUserDetail={(userName, val) =>
                    this.handleUserDetail(userName, val)
                  }
                />
              ))}
            </div>
            {this.state.showPopup ? (
              <CardPopup
                currentUser={this.state.currentUser}
                handlePopup={(val) => this.handlePopup(val)}
              />
            ) : (
              <div></div>
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default CardList;
