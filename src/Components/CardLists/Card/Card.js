import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    let { avatar_url, login, score, id } = this.props.user;
    return (
      <div
        className="gca-card"
        onClick={() => this.props.handleUserDetail(this.props.user.login, true)}
      >
        <div className="gca-card_avatar">
          <img className="gca-card_avatar_img" src={avatar_url} alt="img" />
        </div>
        <div className="gca-card_name">@{login}</div>
        <div className="as">Id: {id} </div>
        <div className="gca-card_score">Score: {score}</div>
      </div>
    );
  }
}

export default Card;
