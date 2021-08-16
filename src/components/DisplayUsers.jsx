import ListItem from "./ListItem";
import GridCard from "./GridCard"

const DisplayUsers = (props) => {
  return (
    <div className="container my-5 py-3">
      <div className={props.isGridView ? "row g-4" : "row"}>
        {props.users.map((user) => (    
               
          props.isGridView ? <GridCard user={user} key={user.login.uuid} /> : <ListItem user={user} key={user.login.uuid} />     
                  
        ))}
      </div>
    </div>
  );
};

export default DisplayUsers;
