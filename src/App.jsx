import React from "react";
import ReactDOM from "react-dom";

import { useState } from "react";

import Header from "./Header.jsx";
import Activiy from "./Activity.jsx";

const App = () => {
  const [view, setView] = useState("activity");
  const [loading, isLoading] = useState(true);

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
      isLoading(true)
    }
  };

  return (
    <div className="container">
      <Header view={view} handleView={handleView}/>
      <Activiy view={view} loading={loading} isLoading={isLoading}></Activiy>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));

export default App;
