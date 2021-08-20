import React, { Component } from "react";

import Header from "./components/Header";
import DisplayUsers from "./components/DisplayUsers.jsx";
import Footer from "./components/Footer";

import { getUsers } from "./services/userService";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isGridView: false,
      userList: [],
    };

    // bind
    this.gridViewHandler = this.gridViewHandler.bind(this);
  }

  gridViewHandler() {
    this.setState({
      isGridView: !this.state.isGridView,
    });
  }

  componentDidMount() {
    getUsers().then((users) => {
      this.setState({ userList: users });
    });
  }

  render() {
    return (
      <>
        <Header isGridView={this.state.isGridView} buttonHandler={this.gridViewHandler} />
        <DisplayUsers isGridView={this.state.isGridView} users={this.state.userList} />
        <Footer />
      </>
    );
  }
}

export default App;
