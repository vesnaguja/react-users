import React, { useState } from "react";

import Header from "./components/Header";
import DisplayUsers from "./components/DisplayUsers.jsx";
import Footer from "./components/Footer";

import { users } from "./data/user-list";


function App() {

  const[gridView, setGridView] = useState(false);

  const gridViewHandler = () => setGridView(!gridView);

  return (
    <>
      <Header isGridView={gridView} buttonHandler={gridViewHandler} />
      <DisplayUsers isGridView={gridView} users={users} /> 
      <Footer />
    </>
  );
}

export default App;
