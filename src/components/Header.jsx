import React from "react";

const Header = (props) => {
  return (
    <header className="container-fluid bg-danger py-2 fixed-top">
      <div className="container d-flex justify-content-between px-3">
        <h3 className="text-white">React Users</h3>

        <div>
          <input onChange={props.onTypingHandler} className="me-2 p-2 rounded-3" type="search" placeholder="Search" aria-label="Search" />
          <button onClick={props.refreshBtnHandler} type="button" className="btn text-danger bg-light me-2">
            Refresh
          </button>

          <button onClick={props.viewButtonHandler} type="button" className="btn text-danger bg-light">
            {props.isGridView ? "List View" : "Grid View"}
          </button>
        </div>
      </div>
    </header>
  );
};

// class Header extends Component {
//   render() {
//     return (
//       <header className="container-fluid bg-danger py-2 fixed-top">
//         <div className="container d-flex justify-content-between px-3">
//           <h3 className="text-white">React Users</h3>
//           <button onClick={this.props.buttonHandler} type="button" className="btn text-danger bg-light">
//             {this.props.isGridView ? "List View" : "Grid View"}
//           </button>
//         </div>
//       </header>
//     );
//   }
// }

export default Header;
