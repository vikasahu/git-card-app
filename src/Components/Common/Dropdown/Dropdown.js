import React, { Component } from 'react'

 class Dropdown extends Component {
    constructor(){
        super();
        this.state = {
            openListItem: false,
            showDropdown: false
        }
    }
    handleDropDown = ()=>{
        this.setState({showDropdown: !this.state.showDropdown})
    }
    getCurrentSort=()=>{
       let p = this.props.sortItems.listItems.find(a=> a.id === this.props.sortItems.currentSortId);
        return p.name
    }
    handleSort=(id)=>{
        this.props.sortHandler(id);
        this.handleDropDown();
    }
    render() {
        return (
            <div className='gca-dropdown_wrapper'>
                <div className="gca-dropdown_head" onClick={()=> this.handleDropDown()}>{this.getCurrentSort()}</div>
                {this.state.showDropdown ? <div className='gca-dropdown_list'>
                    {this.props.sortItems.listItems.map(l => {
                       return <div className='gca-dropdown_listItems' onClick={()=>this.handleSort(l.id)} key={l.id}>{l.name}</div>
                    })}
                </div> : ''}
            </div>
        )
    }
}

export default Dropdown
