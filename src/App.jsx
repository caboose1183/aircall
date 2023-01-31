import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header.jsx";
import Activiy from "./Activity.jsx";
import ActiviyDetail from "./ActivityDetail.jsx";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Activiy></Activiy>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
