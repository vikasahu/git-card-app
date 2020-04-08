import React, { Component } from 'react'
import './CardPopup.scss'

export class CardPopup extends Component {
    render() {
        const { public_repos,following,followers,created_at,site_admin, name ,login } = this.props.currentUser;
        return (
            <div>
                <div className="gca-overlay"></div>
                <div>
                    { public_repos }
                    {created_at}
                </div>
            </div>
        )
    }
}

export default CardPopup
