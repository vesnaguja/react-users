import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import DisplayUsers from "./components/DisplayUsers.jsx";
import Footer from "./components/Footer";

import { getUsers } from "./services/userService";

const App = () => {
  const [gridView, setGridView] = useState(false);
  const [userList, setUserList] = useState([]);
  const [filteredUserList, setFilteredUserList] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = () => {
    getUsers().then((userList) => {
      setUserList(userList);
      setFilteredUserList(userList);
    });
  };
  
  const gridViewHandler = () => {
    setGridView((prevState) => !prevState); // setGridView(!gridView);
  };

  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();

    setFilteredUserList(
      userList.filter(
        (user) => user.name.first.toLowerCase().includes(searchString) /*|| user.name.last.toLowerCase().includes(searchString)*/
      )
    );
  };

  return (
    <>
      <Header isGridView={gridView} viewButtonHandler={gridViewHandler} refreshBtnHandler={loadUsers} onTypingHandler={onTyping} />
      <DisplayUsers isGridView={gridView} users={filteredUserList} />
      <Footer />
    </>
  );
};

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGridView: false,
//       userList: [],
//     };

//     // bind
//     this.gridViewHandler = this.gridViewHandler.bind(this);
//   }

//   gridViewHandler() {
//     this.setState({
//       isGridView: !this.state.isGridView,
//     });
//   }

//   componentDidMount() {
//     getUsers().then((users) => {
//       this.setState({ userList: users });
//     });
//   }

//   render() {
//     return (
//       <>
//         <Header isGridView={this.state.isGridView} buttonHandler={this.gridViewHandler} />
//         <DisplayUsers isGridView={this.state.isGridView} users={this.state.userList} />
//         <Footer />
//       </>
//     );
//   }
// }

export default App;
