import React, { Component } from 'react'

export class Dropdown extends Component {
    constructor(){
        super();
        this.state = {
            openListItem: false,
        }
    }
    render() {
        return (
            <div className='gca-dropdown_wrapper'>
                <div className="gca-dropdown_head">{this.props.sortItems.title}</div>
                <div className='gca-dropdown_list'>
                    {this.props.sortItems.listItems.map(l => {
                       return <div className='gca-dropdown_listItems' onClick={()=>this.props.sortHandler(l.id)} key={l.id}>{l.name}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default Dropdown
