import { createStore } from "redux";
console.log("demoRedux");

const initState = [
    { title: "Hoc JS", id: 1 },
    { title: "Hoc CSS", id: 2 },
    { title: "Hoc HTML", id: 3 },
    { title: "Hoc React", id: 4 },
  ];
const store = createStore(reducer);

function reducer(state = initState, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { name: action.payload, id: state.length + 1 }];
    case "DELETE":
      return [];
    default:
      return state;
  }
}

console.log(store.getState());
let action = {
  type: "DELETE",
};

store.dispatch(action);

export default store;