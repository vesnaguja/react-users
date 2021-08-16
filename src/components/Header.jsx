const Header = (props) => {
  return (
    <header class="container-fluid bg-danger py-2 fixed-top">
      <div class="container d-flex justify-content-between px-3">
        <h3 class="text-white">React Users</h3>
        <button
          onClick={props.buttonHandler}
          type="button"
          class="btn text-danger bg-light"
        >
          {props.isGridView ? "List View" : "Grid View"}
        </button>
      </div>
    </header>
  );
};

export default Header;
