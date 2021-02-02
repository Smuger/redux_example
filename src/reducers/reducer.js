import * as actions from "../actions/actionTypes";

// Reducer in REDUX is responsible for actually changing store state

let lastID = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    // When component dispatches add bug do THIS
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastID,
          description: action.payload.description,
          resolved: false,
        },
      ];

    // When component dispatches remove bug do THIS
    case actions.BUG_REMOVED:
      return state.filter(
        (bug) => bug.description !== action.payload.description
      );

    // When component dispatches resolve bug do THIS
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    // When something goes wrong, just return STATE
    default:
      return state;
  }
}
