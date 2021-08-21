//import React, { Component } from "react";
import { hideMail, formatDate } from "../utilities/functions";

const GridCard = (props) => {

  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="border rounded-2">
        <div className="card p-0 border-0">
          <img src={props.user.picture.large} className="card-img-top img-fluid" alt="..." />
          <div className="card-img-overlay d-flex align-items-end">
            <h5 className="card-title text-light">{props.user.name.first}</h5>
          </div>
        </div>
        <div className="card card-body border-0">
          <p className="card-text m-0">email: {hideMail(props.user.email)}</p>
          <p className="card-text m-0">date of birth: {formatDate(props.user.dob.date)}</p>
        </div>
      </div>
    </div>
  );
}

// class GridCard extends Component {
//   render() {
//     return (
//       <div className="col-sm-12 col-md-6 col-lg-4">
//         <div className="border rounded-2">
//           <div className="card p-0 border-0">
//             <img src={this.props.user.picture.large} className="card-img-top img-fluid" alt="..." />
//             <div className="card-img-overlay d-flex align-items-end">
//               <h5 className="card-title text-light">{this.props.user.name.first}</h5>
//             </div>
//           </div>
//           <div className="card card-body border-0">
//             <p className="card-text m-0">email: {hideMail(this.props.user.email)}</p>
//             <p className="card-text m-0">date of birth: {formatDate(this.props.user.dob.date)}</p>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default GridCard;
