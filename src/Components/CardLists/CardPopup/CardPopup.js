import React, { Component } from "react";
import "./CardPopup.scss";

class CardPopup extends Component {
  render() {
    const {
      public_repos,
      following,
      followers,
      created_at,
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
                  Created at {created_at}
                </div>
                <div className="gca-popup_info">
                  <div className="gca-popup_info_item">
                    <div className="gca-popup_info_count">{public_repos}</div>
                    <div className="gca-popup_info_head">
                      <a href={html_url + "?tab=repositories"} target="_blank">
                        Repo
                      </a>
                    </div>
                  </div>
                  <div className="gca-popup_info_item gca-popup_info_item_c">
                    <div className="gca-popup_info_count">{followers}</div>
                    <div className="gca-popup_info_head">
                      <a href={html_url + "/followers"} target="_blank">
                        Followers
                      </a>
                    </div>
                  </div>
                  <div className="gca-popup_info_item">
                    <div className="gca-popup_info_count">{following}</div>
                    <div className="gca-popup_info_head">
                      <a href={html_url + "/following"} target="_blank">
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
