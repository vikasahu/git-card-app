import React, { Component } from 'react';
import SearchBox from './Components/SearchBox/SearchBox';
import CardList from './Components/CardLists/CardList/CardList';

export class Main extends Component {
    constructor(){
        super();
        this.state = {
            userList: []
        }
    }

    fetchAllUsers = async(userName)=>{
        try{
            let response = await fetch(`https://api.github.com/search/users?q=${userName}`);
            let data = await response.json();
            this.setState({userList: data.items});
        }
        catch{

        }
    }



    render() {
        return (
            <div>
            <SearchBox fetchAllUsers={this.fetchAllUsers} />
            {this.state.userList.length>0 ? <CardList userList={this.state.userList}/> : ''}
            </div>
        )
    }
}

export default Main
