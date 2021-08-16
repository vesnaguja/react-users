const GridCard = (props) => {
  return (
    <div className="col-4">
      <div className="card p-0 ">
        <div className="card-img-top">
          <img src={props.user.picture.large} className="card-img-top img-fluid" alt="..." />
          <div class="card-img-overlay d-flex align-items-end">
            <h5 class="card-title text-light">{props.user.name.first}</h5>
          </div>          
        </div>        
      </div>
      <div className="card card-body">
          <p className="card-text m-0">email: {props.user.email}</p>
          <p className="card-text m-0">date of birth: {props.user.dob.date}</p>
        </div>
    </div>
  );
};

export default GridCard;
