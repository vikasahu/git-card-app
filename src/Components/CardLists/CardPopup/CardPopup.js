import React, { Component } from "react";
import "./CardPopup.scss";

class CardPopup extends Component {


  getDate=()=> {
    let newDate = new Date(this.props.currentUser.created_at);
    let date = newDate.getFullYear()+'-'+(newDate.getMonth()+1)+'-'+newDate.getDate();
    let time = newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds();
    let dateTime = date+' '+time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
    let res = newDate.getHours() > 11  ? " pm" : " am";
    return dateTime + res;
  }

  render() {
    const {
      public_repos,
      following,
      followers,
      site_admin,
      html_url,
      name,
      login,
      avatar_url,
    } = this.props.currentUser;
    return (
      <div>
        <div className="gca-overlay"></div>
        <div className="gca-popup">
          <div className="gca-popup_img"></div>
          {site_admin ? <div className="gca-popup_admin">ADMIN</div> : null}
          <div className="gca-popup_cont_wrap">
            <div className="gca-popup_cont_wrap_tr">
              <div className="gca-popup_cont">
                <img
                  className="gca-popup_cont_img"
                  src={avatar_url}
                  alt="img"
                />
                <div className="gca-popup_cont_name"> {name}</div>
                <div className="gca-popup_cont_username">@{login}</div>
              </div>
              <div className="gca-popup_info_wrap">
                <div className="gca-popup_info_created">
                  Created at {this.getDate()}
                </div>
                <div className="gca-popup_info">
                  <div className="gca-popup_info_item">
                    <div className="gca-popup_info_count">{public_repos}</div>
                    <div className="gca-popup_info_head">
                      <a href={html_url + "?tab=repositories"} target="_blank" rel="noopener noreferrer">
                        Repo
                      </a>
                    </div>
                  </div>
                  <div className="gca-popup_info_item gca-popup_info_item_c">
                    <div className="gca-popup_info_count">{followers}</div>
                    <div className="gca-popup_info_head">
                      <a href={html_url + "/followers"} target="_blank" rel="noopener noreferrer">
                        Followers
                      </a>
                    </div>
                  </div>
                  <div className="gca-popup_info_item">
                    <div className="gca-popup_info_count">{following}</div>
                    <div className="gca-popup_info_head">
                      <a href={html_url + "/following"} target="_blank" rel="noopener noreferrer">
                        Following
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            className="gca-popup_close"
            onClick={() => this.props.handlePopup(false)}
          >
            X
          </span>
        </div>
      </div>
    );
  }
}

export default CardPopup;
