import React, { useState } from "react";
import * as actions from "../actions/actions";
import store from "../store/store";

const App = () => {
  const [bugs, setBugs] = useState([]);
  const [bugDescription, setBugDescription] = useState("");

  const addClickHandler = () => {
    store.dispatch(actions.bugAdded(bugDescription));
    setBugs(store.getState());
  };

  const removeClickHandler = () => {
    store.dispatch(actions.bugRemove(bugDescription));
    setBugs(store.getState());
  };

  const changeChandler = (event) => {
    setBugDescription(event.target.value);
  };

  return (
    <div className="App" style={{ maxWidth: 300 }}>
      <button onClick={addClickHandler}>ADD</button>
      <input onChange={changeChandler}></input>
      <button onClick={removeClickHandler}>REMOVE</button>
      <ul style={{ listStyleType: "none" }}>
        {bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
