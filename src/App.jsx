import React from "react";
import ReactDOM from "react-dom";

import { useState } from "react";

import Header from "./Header.jsx";
import Activiy from "./Activity.jsx";
import ActiviyDetail from "./ActivityDetail.jsx";

const App = () => {
  const [view, setView] = useState("activity");

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };

  return (
    <div className="container">
      <Header view={view} handleView={handleView}/>
      <Activiy></Activiy>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
