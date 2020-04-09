import React, { Component } from 'react'
import './CardPopup.scss'

export class CardPopup extends Component {
    render() {
        const { public_repos,following,followers,created_at,site_admin, name ,login } = this.props.currentUser;
        return (
            <div>
                <div className="gca-overlay"></div>
                <div className="gca-popup">
                    { public_repos }
                    {created_at}

                    <div onClick={()=>this.props.handlePopup(false)}>X</div>
                </div>
            </div>
        )
    }
}

export default CardPopup
