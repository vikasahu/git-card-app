import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardLists/CardList/CardList";
import Loader from "./Components/Common/Loader/Loader";
import Empty from "./Components/Empty/Empty";
import search from "./Service/search.api";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      userList: {},
      currentUserName: [],
      showLoader: false,
      showEmpty: false,
      sortItems: {
        title: "Sort By",
        currentSortId: 0,
        listItems: [
          {
            name: "Relevance",
            id: 0,
          },
          {
            name: "High to Low Score",
            id: 1,
          },
          {
            name: "Low to High Score",
            id: 2,
          },
        ],
      },
    };
  }

  fetchAllUsers = async (userName) => {
    try {
      this.setState({ showLoader: true, showEmpty: false });
      let response = await search.fetchAllUser(userName);
      let data = await response.json();
      let showEmpty = false;
      if (!data.items.length) {
        showEmpty = true;
        this.setState(() => ({
          showLoader: false,
          showEmpty: showEmpty,
        }));
        return;
      } else {
        this.setState((prevState) => ({
          userList: { [userName]: data.items, ...prevState.userList },
          showLoader: false,
          showEmpty: showEmpty,
        }));
      }
    } catch {
      this.setState(() => ({
        showLoader: false,
        showEmpty: false,
      }));
    }
  };

  setCurrentUserList = async (userName) => {
    let userList = this.state.userList[userName];
    if (!userList) {
      await this.fetchAllUsers(userName);
      userList = this.state.userList[userName];
      this.setState({
        currentUserName: {
          name: userName,
          userList,
        },
      });
      return;
    } else {
      this.setState({
        currentUserName: {
          name: userName,
          userList,
        },
        showEmpty: false,
      });
    }
  };

  sortHandler = (id = 0) => {
    let currentUser =  JSON.parse(JSON.stringify(this.state.currentUserName));
    switch (id) {
      case 1:
        currentUser.userList.sort((a, b) => b.id - a.id);
        this.setState((prevState) => ({
          currentUserName: currentUser,
          sortItems: { ...prevState.sortItems, currentSortId: id },
        }));
        break;
      case 2:
        currentUser.userList.sort((a, b) => a.id - b.id);
        this.setState((prevState) => ({
          currentUserName: currentUser,
          sortItems: { ...prevState.sortItems, currentSortId: id },
        }));
        break;
      default:
        this.setState((prevState) => ({
          currentUserName: {
            name: currentUser.name,
            userList: [ ...this.state.userList[currentUser.name] ],
          },
          sortItems: { ...prevState.sortItems, currentSortId: id },
        }));
        break;
    }
  };

  render() {
    return (
      <div>
        <SearchBox setCurrentUserList={this.setCurrentUserList} />

        {this.state.showLoader ? <Loader /> : null}
        {this.state.currentUserName &&
        !this.state.showLoader &&
        this.state.currentUserName.userList &&
        this.state.currentUserName.userList.length > 0 ? (
          <CardList
            userList={this.state.currentUserName}
            sortHandler={this.sortHandler}
            sortItems={this.state.sortItems}
          />
        ) : (
          null
        )}
        {this.state.showEmpty ? <Empty /> : null}
      </div>
    );
  }
}

export default Main;
