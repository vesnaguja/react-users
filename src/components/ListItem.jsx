import React, { Component } from "react";
import { hideMail, formatDate } from "../utilities/functions";

class ListItem extends Component {
  render() {
    return (
      <div className="px-3">
        <div className="border d-flex justify-content-start p-2">
          <div className="mt-1">
            <img className="rounded-circle" src={this.props.user.picture.thumbnail} alt="" />
          </div>
          <div className="ps-3">
            <p className="m-0">name: {this.props.user.name.first}</p>
            <p className="m-0">email: {hideMail(this.props.user.email)}</p>
            <p className="m-0">date of birth: {formatDate(this.props.user.dob.date)}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListItem;
