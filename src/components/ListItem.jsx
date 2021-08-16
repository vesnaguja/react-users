const ListItem = (props) => {
  return (
    <div className="px-3">
      <div className="border d-flex justify-content-start p-2">
        <div className="mt-1">
          <img className="rounded-circle" src={props.user.picture.thumbnail} alt="" />
        </div>
        <div className="ps-3">
          <p className="m-0">name: {props.user.name.first}</p>
          <p className="m-0">email: {props.user.email}</p>
          <p className="m-0">date of birth: {props.user.dob.date}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
