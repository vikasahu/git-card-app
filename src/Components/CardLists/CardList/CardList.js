import React, { Component } from "react";
import Card from "../Card/Card";
import CardPopup from "../CardPopup/CardPopup";
import DropDown from "../../Common/Dropdown/Dropdown";
import user from '../../../Service/users.api'
import "./CardList.scss";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUserName: this.props.userList,
      userDetails: [],
      currentUser: {},
      showPopup: false,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.userList !== prevState.currentUserName) {
      return { currentUserName: nextProps.userList };
    } else return null;
  }

  fetchUserDetails = async (userName) => {
    let userDetail = this.getCurrentUserDetails(userName);
    if (!userDetail) {
      let response = await user.fetchCurrentUser(userName);
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
    const userLen = this.state.currentUserName.userList.length;

    return (
      <div>
        {this.state.currentUserName.userList && userLen ? (
          <div className="gca-card_list_wrapper">
            <div className="gca-card_list_drop_card_wrap">
              <div className="gca-card_list_wrapper_details">
                <div className="gca-card_list_wrapper_result gca-card_list_items">
                  Search Results({userLen === 30 ? "30+" : userLen})
                </div>
                <div className="gca-card_list_wrapper_username gca-card_list_items">
                  Username Searched -{" "}
                  <strong>{this.state.currentUserName.name}</strong>
                </div>
                <DropDown
                  sortItems={this.props.sortItems}
                  sortHandler={(id) => this.props.sortHandler(id)}
                />
              </div>
              <div className="gca-card_list">
                {this.state.currentUserName.userList.map((user) => (
                  <Card
                    user={user}
                    key={user.id}
                    handleUserDetail={(userName, val) =>
                      this.handleUserDetail(userName, val)
                    }
                  />
                ))}
              </div>
            </div>
            {this.state.showPopup ? (
              <CardPopup
                currentUser={this.state.currentUser}
                handlePopup={(val) => this.handlePopup(val)}
              />
            ) : null}
          </div>
        ) : null}
      </div>
    );
  }
}

export default CardList;
