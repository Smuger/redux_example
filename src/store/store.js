import { createStore } from "redux";
import reducer from "../reducers/reducer";

// This one object is the source of truth.
const store = createStore(reducer);

export default store;
