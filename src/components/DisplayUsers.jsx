import React, { Component } from "react";

import ListItem from "./ListItem";
import GridCard from "./GridCard";

class DisplayUsers extends Component {
  render() {
    return (
      <div className="container my-5 py-3">
        <div className={this.props.isGridView ? "row g-4" : "row"}>
          {this.props.users.map((user) =>
            this.props.isGridView ? <GridCard user={user} key={user.login.uuid} /> : <ListItem user={user} key={user.login.uuid} />
          )}
        </div>
      </div>
    );
  }
}

export default DisplayUsers;
