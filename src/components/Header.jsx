import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header className="container-fluid bg-danger py-2 fixed-top">
        <div className="container d-flex justify-content-between px-3">
          <h3 className="text-white">React Users</h3>
          <button onClick={this.props.buttonHandler} type="button" className="btn text-danger bg-light">
            {this.props.isGridView ? "List View" : "Grid View"}
          </button>
        </div>
      </header>
    );
  }
}

export default Header;
