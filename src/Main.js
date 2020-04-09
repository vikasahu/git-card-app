import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardLists/CardList/CardList";
import Loader from './Components/Common/Loader/Loader';
import Empty from './Components/Empty/Empty';

 class Main extends Component {
  constructor() {
    super();
    this.state = {
      userList: {},
      currentUserName: [],
      showLoader : false,
      showEmpty: false,
      sortItems: {
        title: "Sort By",
        listItems: [
          {
            name: "High to Low Score",
            id: 0,
          },
          {
            name: "Low to High Score",
            id: 1,
          },
        ],
      },
    };
  }

  fetchAllUsers = async (userName) => {
    try {
      this.setState({showLoader: true , showEmpty: false})
      let response = await fetch(
        `https://api.github.com/search/users?q=${userName}`
      );
      let data = await response.json();
      let showEmpty = false;
      if(!data.items.length){
        showEmpty = true;
        this.setState(() => ({
            showLoader: false,
            showEmpty: showEmpty
          }));
          return
      }
      else{
        this.setState((prevState) => ({
            userList: { [userName]: data.items, ...prevState.userList },
            showLoader: false,
            showEmpty: showEmpty
          }));
      }
      
    } catch {
        this.setState(() => ({
            showLoader: false,
            showEmpty: false
          }));
    }
  };

  setCurrentUserList = async (userName) => {
    let userList = this.state.userList[userName];
    if (!userList) {
      await this.fetchAllUsers(userName);
      userList = this.state.userList[userName];
      this.setState({ currentUserName: userList });
      return;
    } else {
      this.setState({ currentUserName: userList , showEmpty: false });
    }
  };

  sortHandler = (id) => {
    let currentUser = [...this.state.currentUserName];
    if (id === 0) {
      // 0 means high to low
      currentUser.sort((a, b) => b.id - a.id);
      this.setState({ currentUserName: currentUser });
      return;
    }
    currentUser.sort((a, b) => a.id - b.id);
    this.setState({ currentUserName: currentUser });
  };

  render() {
    return (
      <div>
        <SearchBox setCurrentUserList={this.setCurrentUserList} />

        {this.state.showLoader ? <Loader/>: ''}
        {this.state.currentUserName && !this.state.showLoader && this.state.currentUserName.length > 0 ? (
          <CardList
            userList={this.state.currentUserName}
            sortHandler={this.sortHandler}
            sortItems={this.state.sortItems}
          />
        ) : (
         ''
        )}
        {this.state.showEmpty ? <Empty/> : ''}
      </div>
    );
  }
}

export default Main;
