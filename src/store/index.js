import { createStore } from "redux";

const initialState = {
  questions: [{ title: "" }]
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "ADD_QUESTION") {
    return Object.assign({}, state, {
      questions: state.questions.concat(action.payload)
    });
  }
  return state;
};

const store = createStore(rootReducer);

export default store;