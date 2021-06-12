import React, { useState } from "react";
import { signUp } from "./utils";
import "./App.css";

const App = () => {
  const [user, setUser] = useState();
  return (
    <div className="App">
      <signUp />
    </div>
  );
};

export default App;
